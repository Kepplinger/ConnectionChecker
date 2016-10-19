package at.htl.ccrestprovider.model;

/**
 * Created by Andreas on 12.10.2016.
 */
public class Device {

    private String name;
    private DateTime lastSeen;
    private DateTime connectedAt;
    private boolean status;

    public Device() {
    }

    public Device(String name) {
        this.name = name;
        this.lastSeen = DateTime.now();
        this.connectedAt = DateTime.now();
        this.status = true;
    }

    public DateTime getConnectedAt() {
        return connectedAt;
    }

    public void setConnectedAt(DateTime connectedAt) {
        this.connectedAt = connectedAt;
    }

    public DateTime getLastSeen() {
        return lastSeen;
    }

    public String getName() {
        return name;
    }

    public void setLastSeen(DateTime lastSeen) {
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
}
