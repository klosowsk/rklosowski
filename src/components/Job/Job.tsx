interface JobProps {
  title: string;
  company: string;
  companyUrl?: string;
  date: string;
}

const Job: React.FC<JobProps> = ({ title, company, companyUrl, date }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-2">
      <div className="w-2 border-s-8 border-cyan-500" />
      <p>{title}</p>
      <p className="font-mono text-cyan-500">{company}</p>
      <div className="invisible mb-1 flex-1 border-b-2 border-dotted border-cyan-500 md:visible" />
      <p className="font-mono text-cyan-500">{date}</p>
    </div>
  );
};

export default Job;
