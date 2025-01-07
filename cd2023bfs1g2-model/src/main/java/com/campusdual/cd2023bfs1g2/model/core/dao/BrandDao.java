package com.campusdual.cd2023bfs1g2.model.core.dao;


import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "BrandDao")
@ConfigurationFile(
        configurationFile = "dao/BrandDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")
public class BrandDao extends OntimizeJdbcDaoSupport {



    public static final String ID = "brand_id";
    public static final String BRAND = "brand_name";
}
