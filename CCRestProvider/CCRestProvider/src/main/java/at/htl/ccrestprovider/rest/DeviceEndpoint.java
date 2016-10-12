package at.htl.ccrestprovider.rest;

import at.htl.ccrestprovider.controller.Controller;
import at.htl.ccrestprovider.model.Device;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Andreas on 12.10.2016.
 */
@Path("devices")
public class DeviceEndpoint {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Device> getDevices(){
        return Controller.getInstance().getDevices();
    }

    @POST
    @Path("settings")
    public Response setConfig(@FormParam("avgdisconnection") int avgdisconnection, @FormParam("boundry") int boundry, @FormParam("mindev") int mindevices, @FormParam("maxdev") int maxdevices){
        Controller.getInstance().setAvgDisconnection(avgdisconnection);
        Controller.getInstance().setDisconnectionBoundry(boundry);
        Controller.getInstance().setMinDevices(mindevices);
        Controller.getInstance().setMaxDevices(maxdevices);

        System.out.println(String.format("Settings changed to:\nMin:%d Max:%d AVGDisc:%d Boundry:%d",mindevices,maxdevices,avgdisconnection,boundry));

        return Response.status(200).entity(String.format("Settings changed to:\nMin:%d Max:%d AVGDisc:%d Boundry:%d",mindevices,maxdevices,avgdisconnection,boundry)).build();
    }
}
