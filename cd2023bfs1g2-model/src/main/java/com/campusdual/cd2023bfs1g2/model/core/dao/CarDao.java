package com.campusdual.cd2023bfs1g2.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "CarDao")
@ConfigurationFile(
	configurationFile = "dao/CarDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class CarDao extends OntimizeJdbcDaoSupport {

    public static final String ID = "car_id";
    public static final String BRAND = "brand";
    public static final String MODEL = "model";
    public static final String PLATE = "plate";
    public static final String LOCATION = "location";
    public static final String USER_ID = "user_id";
    public static final String START_DATE_AVAILABLE = "start_date_available";
    public static final String END_DATE_AVAILABLE = "end_date_available";
    public static final String CAR_PHOTO = "car_photo";
    public static final String DAILY_RENTAL_PRICE = "daily_rental_price";
    public static final String FUEL = "fuel";

    public static final String AVAILABLE_CARS = "available_cars";


}
