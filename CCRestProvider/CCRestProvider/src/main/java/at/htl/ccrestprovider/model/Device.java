package at.htl.ccrestprovider.model;

import java.time.LocalDateTime;
import java.util.Random;

/**
 * Created by Andreas on 12.10.2016.
 */
public class Device {
    private String name;
    private LocalDateTime lastSeen;

    public Device() {
    }

    public Device(String name, LocalDateTime lastSeen) {
        this.name = name;
        this.lastSeen = lastSeen;
    }

    public LocalDateTime getLastSeen() {
        return lastSeen;
    }

    public String getName() {
        return name;
    }

    public void setLastSeen(LocalDateTime lastSeen) {
        this.lastSeen = lastSeen;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Status getStatus() {
        return Status.values()[lastSeen.isBefore(LocalDateTime.now().minusSeconds(3))?1:0]; //ka ahnung warum monchmoi -1 :D => Math.abs
    }
}
