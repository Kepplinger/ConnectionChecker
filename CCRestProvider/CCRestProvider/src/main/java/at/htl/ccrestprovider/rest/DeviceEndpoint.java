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
    public List<Device> getDevices() {
        return Controller.getInstance().getDevices();
    }

    @POST
    @Path("settings")
    public Response setConfig(@FormParam("avgDisconnection") int avgDisconnection,
                              @FormParam("devices") int devices) {

        Controller.getInstance().setAvgDisconnection(avgDisconnection);
        Controller.getInstance().setMinDevices(devices);
        Controller.getInstance().setMaxDevices(devices);
        Controller.getInstance().createNewDeviceList();

        System.out.println(String.format("Settings changed to:\nDevices: %d, AVGDisc: %d", devices, avgDisconnection));

        return Response.status(200).entity(String.format("Settings changed to:\nDevices: %d, AVGDisc: %d", devices, avgDisconnection)).build();
    }
}
