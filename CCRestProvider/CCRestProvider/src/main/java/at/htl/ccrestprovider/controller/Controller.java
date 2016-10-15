package at.htl.ccrestprovider.controller;

import at.htl.ccrestprovider.model.Device;

import java.time.LocalDateTime;
import java.time.temporal.TemporalUnit;
import java.util.*;

/**
 * Created by Andreas on 12.10.2016.
 */
public class Controller {
    static final int INIT_MIN_DEVICES = 1;
    static final int INIT_MAX_DEVICES = 15;

    static final int INIT_AVG_DISCONNECTION = 10; //in sec
    static final int INIT_DISCONNECTION_BOUNDRY = 5000;

    private static Controller instance;

    private int minDevices = INIT_MIN_DEVICES;
    private int maxDevices = INIT_MAX_DEVICES;
    private int avgDisconnection = INIT_AVG_DISCONNECTION;
    private int disconnectionBoundry = INIT_DISCONNECTION_BOUNDRY;

    private List<Device> devices;

    private int nextDisconnectionTime(){
        return new Random().nextInt(avgDisconnection+disconnectionBoundry)+disconnectionBoundry;
    }
    /////////////////////////////////////////////////////////////

    private Controller(){
        devices = generateDevices();
    }

    /**
     * Singelton Getter
     * @return
     */
    public static Controller getInstance() {
        if(instance==null)
            instance = new Controller();
        return instance;
    }

    /**
     * Generates a new random device.
     */
    private Device newDevice(){
        Random r = new Random();

        String name = "";
        switch (r.nextInt(3)){
            case 0:
                name += "Samsung Galaxy S";
                break;
            case 1:
                name += "LG G";
                break;
            default:
                name += "Nexus ";
                break;
        }
        name += r.nextInt(9)+1;

        return new Device(name, LocalDateTime.now().minusSeconds(r.nextInt(60000)+15));
    }


    //################################################################################################################
    //### GETTER UND SETTER
    //###################################################################


    public int getMinDevices() {
        return minDevices;
    }

    public void setMinDevices(int minDevices) {
        this.minDevices = minDevices;
    }

    public int getMaxDevices() {
        return maxDevices;
    }

    public void setMaxDevices(int maxDevices) {
        this.maxDevices = maxDevices;
    }

    public int getAvgDisconnection() {
        return avgDisconnection;
    }

    public void setAvgDisconnection(int avgDisconnection) {
        this.avgDisconnection = avgDisconnection;
    }

    public int getDisconnectionBoundry() {
        return disconnectionBoundry;
    }

    public void setDisconnectionBoundry(int disconnectionBoundry) {
        this.disconnectionBoundry = disconnectionBoundry;
    }

    /**
     * Generates a new list of devices and saves them into the devices list.
     */
    public void createNewDeviceList(){
        devices = generateDevices();
    }

    /**
     * Returns all devices and simulates disconnections.
     * @return
     */
    public List<Device> getDevices() {
        System.out.println(String.format("AVG: %d; Bnd: %d; MinDev: %d; MaxDev: %d",avgDisconnection,disconnectionBoundry,minDevices,maxDevices));


        int disconnectedDevicesCnt = new Random().nextInt(devices.size());

        for (Device d:devices){
            d.setLastSeen(LocalDateTime.now());
        }

        List<Device> disconnectedDevices = new ArrayList<>();
        while (disconnectedDevices.size()!=disconnectedDevicesCnt){
            Device next = devices.get(new Random().nextInt(devices.size()));
            if(!disconnectedDevices.contains(next)){
                disconnectedDevices.add(next);
            }
        }

        for (Device d:disconnectedDevices){
            d.setLastSeen(LocalDateTime.now().minusSeconds(new Random().nextInt(avgDisconnection+disconnectionBoundry)+disconnectionBoundry));
        }

        return devices;
    }

    /**
     * Generates a new list of devices.
     * @return
     */
    private List<Device> generateDevices() {

        List<Device> devices = new LinkedList<>();

        for (int i = minDevices; i < new Random().nextInt(maxDevices)+minDevices; i++) {
            devices.add(newDevice());
        }

        return devices;
    }
}
