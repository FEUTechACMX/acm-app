"use client";
import FadeIn from "../_framer/FadeIn";
const About: React.FC = () => {
	return (
		<div className="w-screen h-auto p-8  md:p-24">
			<div className="flex justify-center items-center gap-6 flex-col h-full lg:w-9/12 m-auto">
				<FadeIn props={{ delay: 0.5 }}>
					<h2 className="font-ot text-panelColor">Who Are We</h2>
				</FadeIn>
				<FadeIn props={{ delay: 1 }}>
					<p>
						<span className="font-bold text-panelColor">
							FEU Tech ACM Student Chapter
						</span>{" "}
						is a top-performing academic organization founded in 2007 acting as
						the mother organization for FEU Institute of Technology Computer
						Science students.
					</p>
				</FadeIn>
				<FadeIn props={{ delay: 1.5 }}>
					<p>
						Our organization operates exclusively for educational and scientific
						purposes in order to promote to increased knowledge and greater
						interest in science, design, development, construction, languages,
						management and applications; and as a means of communication between
						persons having an interest in computing.
					</p>
				</FadeIn>
				<FadeIn props={{ delay: 2 }}>
					<h3 className="font-ot text-panelColor">Mission</h3>
				</FadeIn>
				<FadeIn props={{ delay: 2.5 }}>
					<p>
						Our <span className="text-panelColor">mission </span>for the
						incoming school year is to become a better version of ourselves, to
						excel in helping and leading the student body, and to become a voice
						for them. To create an organization that{" "}
						<span className="text-panelColor">
							focuses on the growth of the students
						</span>{" "}
						so that they may also become a better version of themselves. Our
						planned activities are not only for the benefit of the individual
						academically, but we also want them to learn about life and what it
						truly is to become a{" "}
						<span className="text-panelColor">
							CCS student and professional.
						</span>
					</p>
				</FadeIn>
				<FadeIn props={{ delay: 3 }}>
					<h3 className="font-ot text-panelColor">Vision</h3>
				</FadeIn>
				<FadeIn props={{ delay: 3.5 }}>
					<p>
						The officers envision the organization as being a{" "}
						<span className="text-panelColor">
							well-branded, well-established organization
						</span>{" "}
						that focuses on inclusivity for all the students. To continue
						producing high quality events that are aimed towards the growth of
						the students, not only academically but also{" "}
						<span className="text-panelColor">personally.</span> To innovate
						their thought process and become a platform for CS students to
						discover and hone their{" "}
						<span className="text-panelColor">
							strengths, passions, and talents.
						</span>{" "}
						The officers do not want ACM to just be an organization but a
						community of hard-working, like-minded individuals that aims to
						improve to become established CCS professionals.
					</p>
				</FadeIn>
			</div>
		</div>
	);
};

export default About;
