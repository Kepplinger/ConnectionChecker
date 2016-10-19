package at.htl.ccrestprovider.controller;

import at.htl.ccrestprovider.model.DateTime;
import at.htl.ccrestprovider.model.Device;

import java.time.LocalDateTime;
import java.util.*;

/**
 * Created by Andreas on 12.10.2016.
 */
public class Controller {
    static final int INIT_MIN_DEVICES = 5;
    static final int INIT_MAX_DEVICES = 25;

    static final int INIT_AVG_DISCONNECTION = 60;

    private static Controller instance;

    private int minDevices = INIT_MIN_DEVICES;          //minimum number of devices which will be created
    private int maxDevices = INIT_MAX_DEVICES;          //maximum number of devices which will be created
    private int avgDisconnection = INIT_AVG_DISCONNECTION;          //average time at which a device disconnects (in seconds)

    private List<Device> devices;
    private Random random;

    private Controller() {
        devices = generateDevices();
        random = new Random();
    }

    /**
     * Singelton Getter
     *
     * @return
     */
    public static Controller getInstance() {
        if (instance == null)
            instance = new Controller();
        return instance;
    }

    /**
     * Generates a new random device with a random name.
     */
    private Device newDevice() {
        Random r = new Random();

        String name = "";
        switch (r.nextInt(3)) {
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
        name += r.nextInt(9) + 1;

        return new Device(name);
    }


    /*
     * GETTER and SETTER
     */
    public void setMinDevices(int minDevices) {
        this.minDevices = minDevices;
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

    /**
     * Generates a new list of devices and saves them into the devices list.
     */
    public void createNewDeviceList() {
        devices = generateDevices();
    }

    /**
     * Returns all devices and simulates disconnections.
     *
     * @return
     */
    public List<Device> getDevices() {

        int firstRand;
        int secondRand;

        for (Device device : devices) {

            // Two random integers are generated
            firstRand = random.nextInt(getAvgDisconnection()) + 1;
            secondRand = random.nextInt(getAvgDisconnection()) + 1;

            if (device.getStatus() == true) {

                //Stay connected if time since initial connection hasn't exceeded the calculated value or boundary.
                if (device.getConnectedAt().plusSeconds(firstRand * getAvgDisconnection() - secondRand).isAfter(DateTime.now())) {
                    device.setLastSeen(DateTime.now());
                } else {
                    device.setStatus(false);
                }

            } else {

                //Reconnect device if enough time has past.
                if (device.getLastSeen().plusSeconds(getAvgDisconnection() + firstRand - secondRand).isBefore(DateTime.now())) {
                    device.setLastSeen(DateTime.now());
                    device.setConnectedAt(DateTime.now());
                    device.setStatus(true);
                }
            }
        }

        return devices;
    }

    /**
     * Generates a new list of devices.
     *
     * @return
     */
    private List<Device> generateDevices() {

        List<Device> devices = new LinkedList<>();

        if (maxDevices > minDevices) {
            for (int i = 0; i < new Random().nextInt(maxDevices - minDevices) + minDevices; i++) {
                devices.add(newDevice());
            }
        } else {
            for (int i = 0; i < minDevices; i++) {
                devices.add(newDevice());
            }
        }

        System.out.println("Devices: " + devices.size());
        return devices;
    }
}
