package at.htl.ccrestprovider.model;

import java.time.LocalDateTime;

/**
 * Created by Andreas on 12.10.2016.
 */
public class Device {

    private String name;
    private LocalDateTime lastSeen;
    private LocalDateTime connectedAt;
    private boolean status;

    public Device() {
    }

    public Device(String name) {
        this.name = name;
        this.lastSeen = LocalDateTime.now();
        this.connectedAt = LocalDateTime.now();
        this.status = true;
    }

    public LocalDateTime getConnectedAt() {
        return connectedAt;
    }

    public void setConnectedAt(LocalDateTime connectedAt) {
        this.connectedAt = connectedAt;
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

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    //    public boolean getStatus() {
//        return lastSeen.isAfter(LocalDateTime.now().minusSeconds(2)) ? true : false;
//    }
}
