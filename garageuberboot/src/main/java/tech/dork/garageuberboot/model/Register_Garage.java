package tech.dork.garageuberboot.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Register_Garage implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String garageName;
    private String garageLocation;
    private String garagePhone;
    private String garageEmail;
    private String garageOwnerName;
    private String garageLogoImageURL;
    private String service1;
    private double service1Charges;
    private String service2;
    private double service2Charges;
    private String service3;
    private double service3Charges;
    private String service4;
    private double service4Charges;
    private String service5;
    private double service5Charges;
    @Column(nullable = false, updatable = false)
    private String garageCode;

    public Register_Garage() {
    }

    public Register_Garage(Long id, String garageName, String garageLocation, String garagePhone, String garageEmail, String garageOwnerName, String garageLogoImageURL, String service1, double service1Charges, String service2, double service2Charges, String service3, double service3Charges, String service4, double service4Charges, String service5, double service5Charges, String garageCode) {
        this.id = id;
        this.garageName = garageName;
        this.garageLocation = garageLocation;
        this.garagePhone = garagePhone;
        this.garageEmail = garageEmail;
        this.garageOwnerName = garageOwnerName;
        this.garageLogoImageURL = garageLogoImageURL;
        this.service1 = service1;
        this.service1Charges = service1Charges;
        this.service2 = service2;
        this.service2Charges = service2Charges;
        this.service3 = service3;
        this.service3Charges = service3Charges;
        this.service4 = service4;
        this.service4Charges = service4Charges;
        this.service5 = service5;
        this.service5Charges = service5Charges;
        this.garageCode = garageCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGarageName() {
        return garageName;
    }

    public void setGarageName(String garageName) {
        this.garageName = garageName;
    }

    public String getGarageLocation() {
        return garageLocation;
    }

    public void setGarageLocation(String garageLocation) {
        this.garageLocation = garageLocation;
    }

    public String getGaragePhone() {
        return garagePhone;
    }

    public void setGaragePhone(String garagePhone) {
        this.garagePhone = garagePhone;
    }

    public String getGarageEmail() {
        return garageEmail;
    }

    public void setGarageEmail(String garageEmail) {
        this.garageEmail = garageEmail;
    }

    public String getGarageOwnerName() {
        return garageOwnerName;
    }

    public void setGarageOwnerName(String garageOwnerName) {
        this.garageOwnerName = garageOwnerName;
    }

    public String getGarageLogoImageURL() {
        return garageLogoImageURL;
    }

    public void setGarageLogoImageURL(String garageLogoImageURL) {
        this.garageLogoImageURL = garageLogoImageURL;
    }

    public String getService1() {
        return service1;
    }

    public void setService1(String service1) {
        this.service1 = service1;
    }

    public double getService1Charges() {
        return service1Charges;
    }

    public void setService1Charges(double service1Charges) {
        this.service1Charges = service1Charges;
    }

    public String getService2() {
        return service2;
    }

    public void setService2(String service2) {
        this.service2 = service2;
    }

    public double getService2Charges() {
        return service2Charges;
    }

    public void setService2Charges(double service2Charges) {
        this.service2Charges = service2Charges;
    }

    public String getService3() {
        return service3;
    }

    public void setService3(String service3) {
        this.service3 = service3;
    }

    public double getService3Charges() {
        return service3Charges;
    }

    public void setService3Charges(double service3Charges) {
        this.service3Charges = service3Charges;
    }

    public String getService4() {
        return service4;
    }

    public void setService4(String service4) {
        this.service4 = service4;
    }

    public double getService4Charges() {
        return service4Charges;
    }

    public void setService4Charges(double service4Charges) {
        this.service4Charges = service4Charges;
    }

    public String getService5() {
        return service5;
    }

    public void setService5(String service5) {
        this.service5 = service5;
    }

    public double getService5Charges() {
        return service5Charges;
    }

    public void setService5Charges(double service5Charges) {
        this.service5Charges = service5Charges;
    }

    public String getGarageCode() {
        return garageCode;
    }

    public void setGarageCode(String garageCode) {
        this.garageCode = garageCode;
    }

    @Override
    public String toString() {
        return "Register_Garage{" +
                "id=" + id +
                ", garageName='" + garageName + '\'' +
                ", garageLocation='" + garageLocation + '\'' +
                ", garagePhone='" + garagePhone + '\'' +
                ", garageEmail='" + garageEmail + '\'' +
                ", garageOwnerName='" + garageOwnerName + '\'' +
                ", garageLogoImageURL='" + garageLogoImageURL + '\'' +
                ", service1='" + service1 + '\'' +
                ", service1Charges=" + service1Charges +
                ", service2='" + service2 + '\'' +
                ", service2Charges=" + service2Charges +
                ", service3='" + service3 + '\'' +
                ", service3Charges=" + service3Charges +
                ", service4='" + service4 + '\'' +
                ", service4Charges=" + service4Charges +
                ", service5='" + service5 + '\'' +
                ", service5Charges=" + service5Charges +
                ", garageCode='" + garageCode + '\'' +
                '}';
    }
}
