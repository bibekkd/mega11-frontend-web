export interface FeatureProps {
    feature: {
        icon: React.ElementType;
        title: string;
        description: string;
    }
    index: number;
}

export interface StepCardProps {
    step: {
        title: string;
        description: string;
        highlight:string;
        icon: React.ElementType;
    },
    index: number;
}

export interface TestimonialProps {
    testimonial: {
        name: string;
        title: string;
        avatar: string;
        rating: number;
        comment: string;
    }
    index: number;
}