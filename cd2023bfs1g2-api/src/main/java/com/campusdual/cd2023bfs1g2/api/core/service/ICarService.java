package com.campusdual.cd2023bfs1g2.api.core.service;


import com.ontimize.jee.common.dto.EntityResult;

import java.util.List;
import java.util.Map;


public interface ICarService {

	public EntityResult carQuery(Map<?, ?> keyMap, List<?> attrList);
	public EntityResult carInsert(Map<?, ?> attrMap);
	public EntityResult carUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap);
	public EntityResult carDelete(Map<?, ?> keyMap);

	public EntityResult myCarQuery(Map<String, Object> keyMap, List<?> attrList);
	public EntityResult myCarInsert(Map<String, Object> attrMap);
	public EntityResult availableCarsQuery(Map<String, Object> keyMap, List<?> attrList);


}
