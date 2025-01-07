package com.campusdual.cd2023bfs1g2.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;


@Lazy
@Repository(value = "RentDao")
@ConfigurationFile(
	configurationFile = "dao/RentDao.xml",
	configurationFilePlaceholder = "dao/placeholders.properties")
public class RentDao extends OntimizeJdbcDaoSupport {

    public static final String ID = "rent_id";
    public static final String CAR_ID = "car_id";
    public static final String USER_RENT = "user_rent";
    public static final String RENTAL_START_DATE = "rental_start_date";
    public static final String RENTAL_END_DATE = "rental_end_date";
    public static final String TOTAL_PRICE = "total_price";
    public static final String TAX_GOCAR = "tax_gocar";
    public static final String OWNER_PROFIT = "owner_profit";
    public static final String OBSERVATIONS = "observations";



}
