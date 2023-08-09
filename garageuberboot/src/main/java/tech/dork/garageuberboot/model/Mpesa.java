package tech.dork.garageuberboot.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Mpesa implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long BusinessShortCode;
    private String Password;
    private String Timestamp;
    private String TransactionType;
    private Long Amount;
    private Long PartyA;
    private Long PartyB;
    private Long PhoneNumber;
    private String CallBackURL;
    private String AccountReference;
    private String TransactionDesc;
    @Column(nullable = false, updatable = false)
    private String MpesaCode;

}
