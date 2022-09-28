import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div className="question">
      <h2>Questin no 1: How does react work?</h2>
      <p>
        <strong>
          Ans : React is a declarative, efficient, and flexible JavaScript
          library for building user interfaces.It designs simple views for each
          state in your application, and React will efficiently update and
          render just the right component when your data changes.
        </strong>
      </p>
      <h2>Questin no 2: Difference between props vs state?</h2>
      <p>
        <strong>
          Ans : Props are used to pass data from one component to another. The
          state is a local data storage that is local to the component only and
          cannot be passed to other components.
        </strong>
      </p>
      <h2>Questin no 3:useEffect data load ছাড়া আর কি কি করতে পারে? </h2>
      <p>
        <strong>
          Ans : হুক ব্যবহার করে ফাংশনাল কম্পোনেন্টেই স্টেট ম্যানেজ করা যায়,
          লাইফসাইকেল মেথডের কাজও করা যায়। অর্থাৎ হুক ব্যবহার করলে ক্লাস বেসড্
          কম্পোনেন্ট ছাড়াই সব ধরণের ফাংশনালিটি ইম্প্লিমেন্ট করা যায়। এতে যা
          সুবিধা হয় তা হল অনেকগুলো কম্পোনেন্টের মধ্যে স্টেট রিলেটেট লজিক শেয়ার
          করা যায়। মানে একাধিক কম্পোনেন্টের একই কাছাকাছি স্টেট লজিক থাকলে সেটা
          প্রত্যেক কম্পোনেন্টে বার বার ইম্প্লিমেন্ট না করে কাস্টম হুকের মাধ্যামে
          একবার ইম্প্লিমেন্ট করে রিইউজ করা যায়। তাছাড়া হুকের মাধ্যমে একই
          কম্পোনেন্টের বিভিন্ন ফাংশনালিটি আলাদা আলাদা করে লেখা যায় বলে বড় ও জটিল
          কম্পোনেন্ট সিম্পল হয়।
        </strong>
      </p>
    </div>
  );
};

export default Question;
