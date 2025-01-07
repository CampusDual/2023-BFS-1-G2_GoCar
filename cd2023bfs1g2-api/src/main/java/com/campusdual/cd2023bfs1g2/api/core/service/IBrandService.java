package com.campusdual.cd2023bfs1g2.api.core.service;

import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;

public interface IBrandService {

    public EntityResult brandQuery(Map<?, ?> keyMap, List<?> attrList);

}
