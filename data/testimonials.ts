export interface Testimonial {
  id: string;
  name: string;
  position: string;
  image?: string;
  relation: string;
  date: string;
  quote: string;
}

// TODO: Add your own testimonials/recommendations here. The previous
// owner's testimonials were removed rather than reassigned, since they were
// real recommendations written for a different person.
export const testimonials: Testimonial[] = [];
