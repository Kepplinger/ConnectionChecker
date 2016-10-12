package at.htl.ccrestprovider.rest;

import at.htl.ccrestprovider.model.Device;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.LinkedList;
import java.util.List;

/**
 * Created by Andreas on 12.10.2016.
 */
@Path("devices")
public class DeviceEndpoint {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Device> getDevices(){
        List<Device> devices = new LinkedList<>();
        devices.add(new Device("Nexus 5", LocalDateTime.now()));
        return devices;
    }
}
