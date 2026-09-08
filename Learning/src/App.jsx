
import Card from './components/Card'

const jobOpenings = [
  {
    brandLogo:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },

  {
    brandLogo:
      "https://toppng.com/uploads/preview/microsoft-logo-png-transparent-background-11660471226dms6lxgzs1.png",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$145/hr",
    location: "Bangalore, India",
  },

  {
    brandLogo:
      "https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-history-apple-inc-wikipedia-22.png",
    name: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Bangalore, India",
  },

  {
    brandLogo:
      "https://zonalogo.com/assets/meta-logo.webp",
    name: "Meta",
    datePosted: "1 week ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$135/hr",
    location: "Mumbai, India",
  },

  {
    brandLogo:
      "https://www.citypng.com/public/uploads/preview/-11594682142fapt8mnyud.png",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "UI Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Delhi, India",
  },

  {
    brandLogo:
      "https://www.pngmart.com/files/23/Nvidia-Logo-PNG-File.png",
    name: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Pune, India",
  },

  {
    brandLogo:
      "https://blog.logomaster.ai/assets/site/6e/6e23e5cbae493125f6770620c0ce31e1559a1bbd189aaad4f910e5e8f36a7851.jpg",
    name: "Adobe",
    datePosted: "6 days ago",
    post: "UX Researcher",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Noida, India",
  },

  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsL09POVogTtvgOxvsNQosyJtw31llo2oDmI-xyH1IFSYJaQYmpoca8Jp&s=10",
    name: "Salesforce",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Hyderabad, India",
  },

  {
    brandLogo:
      "https://www.ibm.com/adobe/dynamicmedia/deliver/dm-aid--7e990d3a-c83a-42e0-bd93-317be158bceb/1956-logo-yk00320.jpg?preferwebp=true",
    name: "IBM",
    datePosted: "10 weeks ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Chennai, India",
  },

  {
    brandLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBelUyLJ8d-TosEtRYN7AKZ5T4L8xofHeeb_CaXiEbg&s",
    name: "Google",
    datePosted: "3 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$115/hr",
    location: "Bangalore, India",
  },
];


const App = () => {
  return (
    <div className='parent'>
      {jobOpenings.map((elm, idx) =>{
        return <div key={idx}>
         <Card brandLogo = {elm.brandLogo} name = {elm.name} datePosted = {elm.datePosted} post = {elm.post} tag1 = {elm.tag1} tag2 = {elm.tag2} pay= {elm.pay} location={elm.location}/>
        </div>
     
      })}
    </div>
  )
}

export default App


