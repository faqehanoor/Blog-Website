"use client";

import React, { useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 

    if (comment.trim()) { 
      setComments([comment, ...comments]); 
      setComment(''); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4">
      <h2 className="text-2xl font-bold text-white">Wait! Did You like this Blog Write Comment Please!</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border rounded-md text-white"
        />
        <button type="submit" className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>

    
      <div className="mt-4 w-full max-w-md">
        {comments.length === 0 ? (
          <p className="text-center text-white">No comments yet.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="mt-2 p-4 border border-gray-200 text-white rounded-md">
              <p>{comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
