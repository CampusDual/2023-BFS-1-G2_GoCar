package com.campusdual.cd2023bfs1g2.ws.core.rest;

import com.campusdual.cd2023bfs1g2.api.core.service.IBrandService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/brands")
public class BrandRestController extends ORestController<IBrandService> {

    @Autowired
    private IBrandService brandService;

    @Override
    public IBrandService getService() {return this.brandService;}

}

