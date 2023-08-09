package tech.dork.garageuberboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.dork.garageuberboot.exception.ReviewNotFoundException;
import tech.dork.garageuberboot.model.Reviews;
import tech.dork.garageuberboot.repository.ReviewsRepo;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ReviewsService {

    private final ReviewsRepo reviewsRepo;

    @Autowired
    public ReviewsService(ReviewsRepo reviewsRepo) {
        this.reviewsRepo = reviewsRepo;
    }

    public Reviews addReview(Reviews reviews) {
        reviews.setReviewCode(UUID.randomUUID().toString());
        return reviewsRepo.save(reviews);
    }

    public List<Reviews> findAllReviews() {
        return reviewsRepo.findAll();
    }

    public Reviews updateReview(Reviews review) {
        return reviewsRepo.save(review);
    }

    public void deleteReview(Long id){
        reviewsRepo.deleteReviewById(id);
    }

    public Reviews findReviewById(Long id) {
        return reviewsRepo.findReviewById(id)
                .orElseThrow(() -> new ReviewNotFoundException("Review by id " + id + " was not found"));
    }
}
