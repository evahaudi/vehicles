package tech.dork.garageuberboot.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Reviews implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String reviewedComment;
    private Double numOfStars;
    private String reviewedGarageName;
    private String reviewedGarageOwner;
    private String serviceOffered;
    private String reviewingUserName;
    private String reviewingUserImageUrl;
    @Column(nullable = false, updatable = false)
    private String reviewCode;

    public Reviews() {
    }

    public Reviews(Long id, String reviewedComment, Double numOfStars, String reviewedGarageName, String reviewedGarageOwner, String serviceOffered, String reviewingUserName, String reviewingUserImageUrl, String reviewCode) {
        this.id = id;
        this.reviewedComment = reviewedComment;
        this.numOfStars = numOfStars;
        this.reviewedGarageName = reviewedGarageName;
        this.reviewedGarageOwner = reviewedGarageOwner;
        this.serviceOffered = serviceOffered;
        this.reviewingUserName = reviewingUserName;
        this.reviewingUserImageUrl = reviewingUserImageUrl;
        this.reviewCode = reviewCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReviewedComment() {
        return reviewedComment;
    }

    public void setReviewedComment(String reviewedComment) {
        this.reviewedComment = reviewedComment;
    }

    public Double getNumOfStars() {
        return numOfStars;
    }

    public void setNumOfStars(Double numOfStars) {
        this.numOfStars = numOfStars;
    }

    public String getReviewedGarageName() {
        return reviewedGarageName;
    }

    public void setReviewedGarageName(String reviewedGarageName) {
        this.reviewedGarageName = reviewedGarageName;
    }

    public String getReviewedGarageOwner() {
        return reviewedGarageOwner;
    }

    public void setReviewedGarageOwner(String reviewedGarageOwner) {
        this.reviewedGarageOwner = reviewedGarageOwner;
    }

    public String getServiceOffered() {
        return serviceOffered;
    }

    public void setServiceOffered(String serviceOffered) {
        this.serviceOffered = serviceOffered;
    }

    public String getReviewingUserName() {
        return reviewingUserName;
    }

    public void setReviewingUserName(String reviewingUserName) {
        this.reviewingUserName = reviewingUserName;
    }

    public String getReviewingUserImageUrl() {
        return reviewingUserImageUrl;
    }

    public void setReviewingUserImageUrl(String reviewingUserImageUrl) {
        this.reviewingUserImageUrl = reviewingUserImageUrl;
    }

    public String getReviewCode() {
        return reviewCode;
    }

    public void setReviewCode(String reviewCode) {
        this.reviewCode = reviewCode;
    }

    @Override
    public String toString() {
        return "Reviews{" +
                "id=" + id +
                ", reviewedComment='" + reviewedComment + '\'' +
                ", numOfStars=" + numOfStars +
                ", reviewedGarageName='" + reviewedGarageName + '\'' +
                ", reviewedGarageOwner='" + reviewedGarageOwner + '\'' +
                ", serviceOffered='" + serviceOffered + '\'' +
                ", reviewingUserName='" + reviewingUserName + '\'' +
                ", reviewingUserImageUrl='" + reviewingUserImageUrl + '\'' +
                ", reviewCode='" + reviewCode + '\'' +
                '}';
    }
}
