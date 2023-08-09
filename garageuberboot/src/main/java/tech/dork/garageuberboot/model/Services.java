package tech.dork.garageuberboot.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Services implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String requestedUserName;
    private String requestedUserPhone;
    private String requestedUserLocation;
    private String requestedUserImageURL;
    private String requestedUserRequestedService;
    private String requestedUserCode;
    private String requestedGarageName;
    private String requestedGarageLocation;
    private String requestedGaragePhone;
    private String requestedGarageEmail;
    private String requestedGarageOwnerName;
    private String requestedGarageLogoImageURL;
    private String requestedGarageCode;
    private Double requestedServiceCharges;
    private Double waitingTime;
    private String serviceStatus;
    @Column(nullable = false, updatable = false)
    private String serviceStatusCode;

    public Services() {
    }

    public Services(Long id, String requestedUserName, String requestedUserPhone, String requestedUserLocation, String requestedUserImageURL, String requestedUserRequestedService, String requestedUserCode, String requestedGarageName, String requestedGarageLocation, String requestedGaragePhone, String requestedGarageEmail, String requestedGarageOwnerName, String requestedGarageLogoImageURL, String requestedGarageCode, Double requestedServiceCharges, Double waitingTime, String serviceStatus, String serviceStatusCode) {
        this.id = id;
        this.requestedUserName = requestedUserName;
        this.requestedUserPhone = requestedUserPhone;
        this.requestedUserLocation = requestedUserLocation;
        this.requestedUserImageURL = requestedUserImageURL;
        this.requestedUserRequestedService = requestedUserRequestedService;
        this.requestedUserCode = requestedUserCode;
        this.requestedGarageName = requestedGarageName;
        this.requestedGarageLocation = requestedGarageLocation;
        this.requestedGaragePhone = requestedGaragePhone;
        this.requestedGarageEmail = requestedGarageEmail;
        this.requestedGarageOwnerName = requestedGarageOwnerName;
        this.requestedGarageLogoImageURL = requestedGarageLogoImageURL;
        this.requestedGarageCode = requestedGarageCode;
        this.requestedServiceCharges = requestedServiceCharges;
        this.waitingTime = waitingTime;
        this.serviceStatus = serviceStatus;
        this.serviceStatusCode = serviceStatusCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRequestedUserName() {
        return requestedUserName;
    }

    public void setRequestedUserName(String requestedUserName) {
        this.requestedUserName = requestedUserName;
    }

    public String getRequestedUserPhone() {
        return requestedUserPhone;
    }

    public void setRequestedUserPhone(String requestedUserPhone) {
        this.requestedUserPhone = requestedUserPhone;
    }

    public String getRequestedUserLocation() {
        return requestedUserLocation;
    }

    public void setRequestedUserLocation(String requestedUserLocation) {
        this.requestedUserLocation = requestedUserLocation;
    }

    public String getRequestedUserImageURL() {
        return requestedUserImageURL;
    }

    public void setRequestedUserImageURL(String requestedUserImageURL) {
        this.requestedUserImageURL = requestedUserImageURL;
    }

    public String getRequestedUserRequestedService() {
        return requestedUserRequestedService;
    }

    public void setRequestedUserRequestedService(String requestedUserRequestedService) {
        this.requestedUserRequestedService = requestedUserRequestedService;
    }

    public String getRequestedUserCode() {
        return requestedUserCode;
    }

    public void setRequestedUserCode(String requestedUserCode) {
        this.requestedUserCode = requestedUserCode;
    }

    public String getRequestedGarageName() {
        return requestedGarageName;
    }

    public void setRequestedGarageName(String requestedGarageName) {
        this.requestedGarageName = requestedGarageName;
    }

    public String getRequestedGarageLocation() {
        return requestedGarageLocation;
    }

    public void setRequestedGarageLocation(String requestedGarageLocation) {
        this.requestedGarageLocation = requestedGarageLocation;
    }

    public String getRequestedGaragePhone() {
        return requestedGaragePhone;
    }

    public void setRequestedGaragePhone(String requestedGaragePhone) {
        this.requestedGaragePhone = requestedGaragePhone;
    }

    public String getRequestedGarageEmail() {
        return requestedGarageEmail;
    }

    public void setRequestedGarageEmail(String requestedGarageEmail) {
        this.requestedGarageEmail = requestedGarageEmail;
    }

    public String getRequestedGarageOwnerName() {
        return requestedGarageOwnerName;
    }

    public void setRequestedGarageOwnerName(String requestedGarageOwnerName) {
        this.requestedGarageOwnerName = requestedGarageOwnerName;
    }

    public String getRequestedGarageLogoImageURL() {
        return requestedGarageLogoImageURL;
    }

    public void setRequestedGarageLogoImageURL(String requestedGarageLogoImageURL) {
        this.requestedGarageLogoImageURL = requestedGarageLogoImageURL;
    }

    public String getRequestedGarageCode() {
        return requestedGarageCode;
    }

    public void setRequestedGarageCode(String requestedGarageCode) {
        this.requestedGarageCode = requestedGarageCode;
    }

    public Double getRequestedServiceCharges() {
        return requestedServiceCharges;
    }

    public void setRequestedServiceCharges(Double requestedServiceCharges) {
        this.requestedServiceCharges = requestedServiceCharges;
    }

    public Double getWaitingTime() {
        return waitingTime;
    }

    public void setWaitingTime(Double waitingTime) {
        this.waitingTime = waitingTime;
    }

    public String getServiceStatus() {
        return serviceStatus;
    }

    public void setServiceStatus(String serviceStatus) {
        this.serviceStatus = serviceStatus;
    }

    public String getServiceStatusCode() {
        return serviceStatusCode;
    }

    public void setServiceStatusCode(String serviceStatusCode) {
        this.serviceStatusCode = serviceStatusCode;
    }

    @Override
    public String toString() {
        return "Services{" +
                "id=" + id +
                ", requestedUserName='" + requestedUserName + '\'' +
                ", requestedUserPhone='" + requestedUserPhone + '\'' +
                ", requestedUserLocation='" + requestedUserLocation + '\'' +
                ", requestedUserImageURL='" + requestedUserImageURL + '\'' +
                ", requestedUserRequestedService='" + requestedUserRequestedService + '\'' +
                ", requestedUserCode='" + requestedUserCode + '\'' +
                ", requestedGarageName='" + requestedGarageName + '\'' +
                ", requestedGarageLocation='" + requestedGarageLocation + '\'' +
                ", requestedGaragePhone='" + requestedGaragePhone + '\'' +
                ", requestedGarageEmail='" + requestedGarageEmail + '\'' +
                ", requestedGarageOwnerName='" + requestedGarageOwnerName + '\'' +
                ", requestedGarageLogoImageURL='" + requestedGarageLogoImageURL + '\'' +
                ", requestedGarageCode='" + requestedGarageCode + '\'' +
                ", requestedServiceCharges=" + requestedServiceCharges +
                ", waitingTime=" + waitingTime +
                ", serviceStatus='" + serviceStatus + '\'' +
                ", serviceStatusCode='" + serviceStatusCode + '\'' +
                '}';
    }
}
