package com.campusdual.cd2023bfs1g2.model.core.service;

import com.campusdual.cd2023bfs1g2.api.core.service.ICarService;
import com.campusdual.cd2023bfs1g2.model.core.dao.CarDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.gui.SearchValue;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;


@Lazy
@Service("CarService")
public class CarService implements ICarService {

	private static final String PRIMARYUSERKEY = "user_id";
	@Autowired
	private CarDao carDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public EntityResult carQuery(Map<?, ?> keyMap, List<?> attrList) {
		return  this.daoHelper.query(carDao, keyMap, attrList);
	}

	public EntityResult carInsert(Map<?, ?> attrMap) {

		return this.daoHelper.insert(carDao, attrMap);
	}

	public EntityResult carUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(carDao, attrMap, keyMap);
	}

	public EntityResult carDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.carDao, keyMap);
	}

	@Override
	public EntityResult myCarQuery(Map<String, Object> keyMap, List<?> attrList) {
		//We recover the id_user that is logged in, and we put it in the map to save it in the database
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		keyMap.put(PRIMARYUSERKEY, auth.getName());
		return this.daoHelper.query(carDao, keyMap, attrList);
	}

	@Override
	public EntityResult myCarInsert(Map<String, Object> attrMap) {
		//We recover the id_user that is logged, and we put it in the map to save it in the database
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		attrMap.put(PRIMARYUSERKEY, auth.getName());

		String plate = (String) attrMap.get("plate");
		attrMap.put("plate", plate.toUpperCase());

		//We retrieve the map that returns the date range and access its values
		Map<String, Object> dateRangeMap = (Map<String, Object>) attrMap.get("daterange");
		String startDate= (String) dateRangeMap.get("startDate");
		String endDate= (String) dateRangeMap.get("endDate");

		attrMap.put("start_date_available", formatDateDateRange(startDate));
		attrMap.put("end_date_available", formatDateDateRange(endDate));

		return this.daoHelper.insert(carDao,attrMap);
	}

	@Override
	public EntityResult availableCarsQuery(Map<String, Object> keyMap, List<?> attrList){
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();

		//We create a SearchValue in which it is not equal to the registered user and then we add it to the map
		SearchValue notUser = new SearchValue(SearchValue.NOT_EQUAL,auth.getName());
		keyMap.put(PRIMARYUSERKEY, notUser);

		return this.daoHelper.query(carDao, keyMap, attrList, CarDao.AVAILABLE_CARS);
	}



	public static Date formatDateDateRange(String date){
		//Create a pattern to transform the date and then return it formatted
		DateTimeFormatter pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
		ZonedDateTime dateTimeStart = ZonedDateTime.parse(date, pattern);
		Date finalDate = Date.from(dateTimeStart.toInstant());
		return finalDate;
	}

}
