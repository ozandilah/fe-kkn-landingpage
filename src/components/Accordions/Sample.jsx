import React from "react";
import { CustomizedAccordions } from "./Accordion";

export default function SampleAccordions() {
  return (
    <div className="h-screen w-full">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center justify-center">
        <CustomizedAccordions
          data={[
            {
              title: "Question 1",
              content:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis, vero sit quisquam beatae optio asperiores blanditiis veritatis eum corrupti?",
            },
            {
              title: "Question 2",
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis, vero sit quisquam beatae optio asperiores blanditiis veritatis eum corrupti?",
            },
            {
              title: "Question 3",
              content: (
                <>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore mollitia aliquam dolore doloribus iure reiciendis
                    autem fugit quas sapiente. Totam architecto fuga ad
                    consectetur laborum quas? Nisi et suscipit quo architecto
                    numquam reprehenderit amet omnis optio ullam voluptatibus
                    adipisci excepturi doloremque, minima ex officiis magni
                    aperiam eligendi consequuntur assumenda nesciunt!
                  </p>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
