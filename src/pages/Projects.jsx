import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'

const items = [
  {
    title:'Autonomous AI Drone',
    badge:'UAV / PX4',
    summary:'PX4 on Pixhawk + Raspberry Pi 4; EKF-tuned fusion, GPS autonomy, LiDAR + RGB perception.',
    bullets:['PX4 flight stack','Point‑to‑point GPS missions','LiDAR + camera avoidance'],
    links:[{label:'Demo (YouTube)', href:'https://youtu.be/cf-Sw53yA5E?si=Cjf-Ey51lNuXJp09'}],
  },
  {
    title:'Omnidirectional Dense SLAM',
    badge:'360° / VO',
    summary:'Monocular SLAM with Insta360 video; OpenCV VO, trajectory, sparse map.',
    bullets:['Python + OpenCV','360° data ingestion','Sparse reconstruction'],
    links:[],
  },
  {
    title:'Firearm Detection & Alerts',
    badge:'YOLOv8',
    summary:'Real‑time firearm detection with finetuned YOLOv8 (mAP 0.87) and SMS/voice alerts.',
    bullets:['Custom dataset','Realtime pipeline','Twilio integration'],
    links:[{label:'Demo (YouTube)', href:'https://youtu.be/AnZQ4tLCE10'}],
  },
  {
    title:'ORB‑SLAM3 on Autonomous Car',
    badge:'Stereo / IMU',
    summary:'Stereo & stereo‑inertial ORB‑SLAM3 on NUance car datasets for mapping + localization.',
    bullets:['Real‑world datasets','Robust tracking','Accurate 3D maps'],
    links:[],
  },
  {
    title:'Low‑Cost LiDAR Sensor',
    badge:'ToF / 2D Map',
    summary:'Custom ToF LiDAR module and enclosure; on‑vehicle 2D mapping prototype.',
    bullets:['Hardware + enclosure','On‑vehicle tests'],
    links:[
      {label:'GitHub', href:'https://github.com/AkshajRaut/LIDAR'},
      {label:'Demo (YouTube)', href:'https://youtu.be/rRnFcgB8jcc'}
    ],
  }
]

export default function Projects(){
  return (
    <section className="container-p py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="text-sm text-slate-500">Robotics • SLAM • Perception • Embedded</div>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p,i)=>(<ProjectCard key={i} {...p} />))}
      </div>
    </section>
  )
}
