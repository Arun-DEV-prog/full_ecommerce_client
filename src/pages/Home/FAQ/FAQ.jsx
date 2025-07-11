import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="text-lg">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="divider"></div>

      {/* First FAQ Item */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          How does this posture corrector work?
        </h2>
        <p className="mb-4">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here's how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </p>
      </div>

      <div className="divider"></div>

      {/* Second FAQ Item */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Is it suitable for all ages and body types?
        </h2>
      </div>

      {/* Bullet Point Questions */}
      <div className="space-y-4 mb-8">
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="font-medium">
            Does it really help with back pain and posture improvement?
          </p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="font-medium">
            Does it have smart features like vibration alerts?
          </p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">•</span>
          <p className="font-medium">
            How will I be notified when the product is back in stock?
          </p>
        </div>
      </div>

      <div className="divider"></div>

      {/* See More Button */}
      <button className="btn btn-primary w-full max-w-xs mx-auto block">
        See More FAQ's
      </button>
    </div>
  );
};

export default FAQ;
