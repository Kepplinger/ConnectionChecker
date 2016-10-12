package at.htl.ccrestprovider.controller;

import at.htl.ccrestprovider.model.Device;

import java.time.LocalDateTime;
import java.util.*;

/**
 * Created by Andreas on 12.10.2016.
 */
public class Controller {
    static final int INIT_MIN_DEVICES = 1;
    static final int INIT_MAX_DEVICES = 15;

    static final int INIT_AVG_DISCONNECTION = 10*1000; //in ms
    static final int INIT_DISCONNECTION_BOUNDRY = 5000;


    private Timer timer;

    private int minDevices = INIT_MIN_DEVICES;
    private int maxDevices = INIT_MAX_DEVICES;
    private int avgDisconnection = INIT_AVG_DISCONNECTION;
    private int disconnectionBoundry = INIT_DISCONNECTION_BOUNDRY;


    private List<Device> devices;

    ///////////////////////////////////////////////////////
    /// Time scheduling
    public void StartService(){
        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                System.out.println("");
            }
        },100,1000);
    }

    private int nextDisconnectionTime(){
        return new Random().nextInt(avgDisconnection+disconnectionBoundry)+disconnectionBoundry;
    }
    /////////////////////////////////////////////////////////////

    //Singleton
    private Controller(){
        devices = new LinkedList<>();
        for (int i = minDevices; i < new Random().nextInt(maxDevices)+minDevices; i++) {
            devices.add(newDevice());
        }
    }
    private static Controller instance;
    public static Controller getInstance() {
        if(instance==null)
            instance = new Controller();
        return instance;
    }

    /**
     * Device Generator
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

    public List<Device> getDevices() {
        return devices;
    }

    public static void setInstance(Controller instance) {
        Controller.instance = instance;
    }
}
