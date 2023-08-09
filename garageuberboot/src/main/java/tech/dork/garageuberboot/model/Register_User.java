package tech.dork.garageuberboot.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Register_User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String userName;
    private String userPhone;
    private String userLocation;
    private String userImageURL;
    private String userRequestedService;
    @Column(nullable = false, updatable = false)
    private String userCode;

    public Register_User() {
    }

    public Register_User(Long id, String userName, String userPhone, String userLocation, String userImageURL, String userRequestedService, String userCode) {
        this.id = id;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userLocation = userLocation;
        this.userImageURL = userImageURL;
        this.userRequestedService = userRequestedService;
        this.userCode = userCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserLocation() {
        return userLocation;
    }

    public void setUserLocation(String userLocation) {
        this.userLocation = userLocation;
    }

    public String getUserImageURL() {
        return userImageURL;
    }

    public void setUserImageURL(String userImageURL) {
        this.userImageURL = userImageURL;
    }

    public String getUserRequestedService() {
        return userRequestedService;
    }

    public void setUserRequestedService(String userRequestedService) {
        this.userRequestedService = userRequestedService;
    }

    public String getUserCode() {
        return userCode;
    }

    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }

    @Override
    public String toString() {
        return "Register_User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", userPhone='" + userPhone + '\'' +
                ", userLocation='" + userLocation + '\'' +
                ", userImageURL='" + userImageURL + '\'' +
                ", userRequestedService='" + userRequestedService + '\'' +
                ", userCode='" + userCode + '\'' +
                '}';
    }
}
