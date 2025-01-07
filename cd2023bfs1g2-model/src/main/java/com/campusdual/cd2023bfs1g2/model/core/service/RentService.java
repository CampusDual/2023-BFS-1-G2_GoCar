package com.campusdual.cd2023bfs1g2.model.core.service;

import java.util.List;
import java.util.Map;

import com.campusdual.cd2023bfs1g2.api.core.service.IRentService;
import com.campusdual.cd2023bfs1g2.model.core.dao.RentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;



@Lazy
@Service("RentService")
public class RentService implements IRentService {

	private static final String USER_RENT = "user_rent";


	@Autowired
	private RentDao rentDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;


	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult allRentQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(rentDao, keyMap, attrList);
	}

	public EntityResult rentInsert(Map<String, Object> attrMap) {
		//We recover the id_user that is logged in, and we put it in the map to save it in the database
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		attrMap.put(USER_RENT, auth.getName());

//		Map<String, Object> dateRangeMap = (Map<String, Object>) attrMap.get("daterange");
//		String startDate = (String) dateRangeMap.get("startDate");
//		String endDate = (String) dateRangeMap.get("endDate");
//
//		attrMap.put("rental_start_date", formatDateDateRange(startDate));
//		attrMap.put("rental_end_date", formatDateDateRange(endDate));

		return this.daoHelper.insert(rentDao, attrMap);
	}

	public EntityResult rentUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(rentDao, attrMap, keyMap);
	}

	public EntityResult rentDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.rentDao, keyMap);
	}

	@Override
	public EntityResult myCarRentalsQuery(Map<String, Object> keyMap, List<?> attrList) {
		//We recover the id_user that is logged in, and we put it in the map to save it in the database
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		keyMap.put("user_id", auth.getName());
		return this.daoHelper.query(rentDao, keyMap, attrList, "my_car_rentals");
	}

	@Override
	public EntityResult chartProfitMonthQuery(Map<String, Object> keyMap, List<?> attrList) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		keyMap.put("user_id", auth.getName());
		return this.daoHelper.query(rentDao, keyMap, attrList, "chart_profit_month");
	}

	@Override
	public EntityResult myRentsQuery(Map<String, Object> keyMap, List<?> attrList) {
		//We recover the id_user that is logged in, and we put it in the map to save it in the database
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		keyMap.put(USER_RENT, auth.getName());
		return this.daoHelper.query(rentDao, keyMap, attrList, "myRents");
	}
	@Override
	public EntityResult chartTaxQuery(Map<String, Object> keyMap, List<?> attrList) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		keyMap.put("user_id", auth.getName());
		return this.daoHelper.query(rentDao, keyMap, attrList, "chart_tax");
	}

	@Override
	public EntityResult chartAllTaxQuery(Map<String, Object> keyMap, List<?> attrList) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		keyMap.put("user_id", auth.getName());
		return this.daoHelper.query(rentDao, keyMap, attrList, "chart_all_tax");
	}
}