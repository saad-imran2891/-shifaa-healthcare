🏥 Shifaa – Pakistan's Unified Health Record
One record. One platform. Everywhere.

Shifaa is a digital health ecosystem that connects patients, doctors, and labs across Pakistan using a single CNIC‑linked medical record.
No more lost reports, repeated history, or disconnected referrals.

📌 Project Overview
Patient	Doctor	Lab
View complete medical timeline	Search any patient by CNIC	Upload diagnostic reports (PDF)
Download prescriptions as PDF	Write & sign digital prescriptions	Link reports directly to patient & doctor
Track lab reports & surgeries	Refer patients to other doctors	Secure B2B revenue model
Emergency‑ready data (blood group, allergies)	Receive incoming referrals with full history	Verified lab network

🧠 The Problem We Solve
Fragmented medical history → patients repeat themselves at every new doctor.
Lost lab reports → patients carry paper files that get misplaced.
Referrals with zero context → receiving doctors have no prior history.
Chronic patients falling through gaps → no remote monitoring.
Shifaa gives every citizen a permanent, portable, encrypted health record – instantly accessible anywhere in Pakistan.

👨‍💻 Team: Quantum Tech Visionaries
Name	Roll Number	Role
Saad Imran	se241078	
Sahil Kumar	se241059	
Ubaidullah Rasheed	se241075	

🚀 Features (Fully Implemented)
Patient Portal (patient.html)
✅ Emergency info strip (blood group, allergies, chronic conditions)
✅ Full medical timeline (visits, doctors, symptoms, diagnosis)
✅ Prescription table with medicine name, dose, frequency
✅ Download Prescription as PDF (professional, print‑ready)
✅ Active medications table
✅ Lab reports with PDF viewer
✅ Surgery history & referral list

Doctor Portal (doctor.html)
✅ PMDC login (demo: 12345 / any email / any password)
✅ Sidebar list of all patients + search by CNIC/name
✅ Toggle between My Patients and Referred to Me
✅ Add new patient instantly
✅ View patient’s full record (chronic, allergies, timeline, medications, surgeries, referrals)
✅ Write digital prescription (symptoms, diagnosis, medicines, notes) – saves to Firestore
✅ Refer patient to another doctor by PMDC – creates referral document with full context
✅ View referred patient details (referral banner + full medical history)
✅ Real‑time referral count badge

Lab Portal (lab.html)
✅ Corporate login (demo: any credentials → redirects)
✅ Upload PDF reports linked to patient CNIC & doctor PMDC
✅ Reports stored securely in Firestore (base64) – only accessible to intended patient & doctor
✅ B2B revenue dashboard (license tier, node integrity)

Registration (register.html)
✅ Three role toggle: Patient / Doctor / Lab
✅ Patient: CNIC, name, age, gender, blood group, phone, city, password, allergies, chronic conditions
✅ Doctor: name, PMDC, specialization, hospital, city, phone, email, password
✅ Lab: name, regno, city, address, phone, lab type, email, password
✅ CNIC auto‑formatting & validation

Authentication
✅ Session‑based (sessionStorage) – no complex Auth required
✅ Password check (demo: patients use patient123, doctors use any password for demonstration)

🛠️ Tech Stack
Component	Technology
Frontend	HTML5, CSS3, Vanilla JavaScript
Fonts	Google Fonts (Playfair Display, Mulish)
PDF Generation	jsPDF + html2canvas
Database	Firebase Firestore (real‑time)
File Storage	Firebase Storage (for lab report PDFs)
Version Control	Git + GitHub

📦 Installation & Setup
Set up Firebase
Create a project on Firebase Console
Enable Firestore Database (Test mode), Storage, and Authentication (Email/Password)
Copy your Firebase config into each HTML file (already embedded – replace with yours if needed)
Seed the database (one‑time)
Open seed.html in your browser
Click Seed Database Now – this creates 32 patients, 10 doctors, and 5 labs with realistic histories.
Run the app
Use any local server (VS Code Live Server, python -m http.server, etc.)
Open index.html or login.html

🔐 Demo Credentials
Patient Login
CNIC	Password
42101-1234567-8	patient123
42201-2345678-2	patient123
35201-3456789-3	patient123
…any seeded patient	patient123
Doctor Login
PMDC	Email	Password
12345	ahmed@hospital.pk	any
34567	bilal.h@sch.pk	any
Lab Login
License ID	Email	Password
LAB-9923	any	any


🎯 Future Roadmap
✅ PDF prescription download (done)
✅ Referral system (done)
✅ Lab report upload (done)
⏳ QR code for instant patient identification
⏳ WhatsApp prescription reminders
⏳ Pharmacy portal for prescription fulfillment
⏳ Real‑time push notifications for new lab reports

📄 License
This project is developed for educational/hackathon purposes only. All rights reserved by Quantum Tech Visionaries.

🙏 Acknowledgements
Firebase for real‑time database & storage
jsPDF & html2canvas for PDF generation
Google Fonts for typography

Shifaa – Making healthcare portable across Pakistan.
Built with ❤️ by Quantum Tech Visionaries.

