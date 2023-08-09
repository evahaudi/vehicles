package tech.dork.garageuberboot.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.dork.garageuberboot.model.Reviews;
import tech.dork.garageuberboot.service.ReviewsService;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewsResource {
    private final ReviewsService reviewsService;

    public ReviewsResource(ReviewsService reviewsService) {
        this.reviewsService = reviewsService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Reviews>> getAllReviews () {
        List<Reviews> reviews = reviewsService.findAllReviews();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Reviews> getReviewById (@PathVariable("id") Long id) {
        Reviews reviews = reviewsService.findReviewById(id);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Reviews> addReview(@RequestBody Reviews reviews) {
        Reviews newReview = reviewsService.addReview(reviews);
        return new ResponseEntity<>(newReview, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Reviews> updateReview(@RequestBody Reviews reviews) {
        Reviews updateReview = reviewsService.updateReview(reviews);
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteReview(@PathVariable("id") Long id) {
        reviewsService.deleteReview(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
