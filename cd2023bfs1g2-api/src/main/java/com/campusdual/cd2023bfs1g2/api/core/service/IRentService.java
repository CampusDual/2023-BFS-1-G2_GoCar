package com.campusdual.cd2023bfs1g2.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface IRentService {

	public EntityResult allRentQuery(Map<?, ?> keyMap, List<?> attrList);
	public EntityResult rentInsert(Map<String, Object> attrMap);
	public EntityResult rentUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
	public EntityResult rentDelete(Map<?, ?> keyMap);

	public EntityResult myCarRentalsQuery(Map<String, Object> keyMap, List<?> attrList);
	public EntityResult myRentsQuery(Map<String, Object> keyMap, List<?> attrList);
	public EntityResult chartProfitMonthQuery(Map<String, Object> keyMap, List<?> attrList);
	public EntityResult chartTaxQuery(Map<String, Object> keyMap, List<?> attrList);
	public EntityResult chartAllTaxQuery(Map<String, Object> keyMap, List<?> attrList);

}
