package com.campusdual.cd2023bfs1g2.ws.core.rest;

import com.campusdual.cd2023bfs1g2.api.core.service.IRentService;
import com.ontimize.jee.server.rest.ORestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rents")
public class RentRestController extends ORestController<IRentService> {
    @Autowired
    private IRentService rentService;

    @Override
    public IRentService getService() {return this.rentService;}
}
