type Job = {
  role: string;
  company: {
    title: string;
    url: string;
  };
  duration: {
    from: string;
    to: string;
  };
  description: string[];
};

export default Job;
