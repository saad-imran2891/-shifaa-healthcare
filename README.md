🏥 Shifaa – Pakistan's Unified Health Record

One Record. One Platform. Everywhere.

Shifaa is a digital healthcare ecosystem designed to connect patients, doctors, and diagnostic laboratories across Pakistan through a single CNIC-linked medical record. The platform eliminates fragmented healthcare data, lost reports, and disconnected referrals by providing a secure, portable, and unified health record accessible from anywhere.

🌟 Vision

Healthcare information should follow the patient, not remain trapped in hospitals, clinics, or paper files.

Shifaa enables every citizen to maintain a permanent digital medical record that can be securely accessed by authorized healthcare professionals whenever needed.

🧠 Problem Statement

Pakistan's healthcare system faces several critical challenges:

Patients repeatedly explain their medical history to every new doctor.
Lab reports are paper-based and frequently lost or delayed.
Referrals often arrive without diagnostic context or previous treatment history.
Chronic disease patients receive fragmented care across multiple providers.
Emergency responders lack access to vital medical information.
Our Solution

Shifaa creates a CNIC-linked nationwide health record system that:

Centralizes patient history
Connects doctors and laboratories
Preserves referral context
Provides emergency-ready medical information
Enables secure digital healthcare workflows
🚀 Key Features
👤 Patient Portal (patient.html)
Emergency information dashboard
Blood Group
Allergies
Chronic Conditions
Complete medical timeline
Prescription management
Active medications tracking
Lab report viewer
Surgery history
Referral history
Professional PDF prescription download
👨‍⚕️ Doctor Portal (doctor.html)
PMDC-based login system
Search patients by CNIC or name
Manage personal patient list
View referred patients
Create new patient records
Access complete patient medical history
Generate digital prescriptions
Refer patients to other doctors
Real-time referral tracking
Firestore-based data synchronization
🧪 Laboratory Portal (lab.html)
Laboratory dashboard
Upload PDF diagnostic reports
Link reports to patients and doctors
Secure report storage
Access-controlled document sharing
Revenue & integrity dashboard
📝 Registration System (register.html)
Patient Registration
CNIC
Name
Age
Gender
Blood Group
Phone Number
City
Allergies
Chronic Conditions
Doctor Registration
Name
PMDC Number
Specialization
Hospital
City
Contact Information
Laboratory Registration
Laboratory Name
Registration Number
Address
City
Laboratory Type
Contact Information
🔐 Authentication
Patient Login
CNIC-based authentication
Demo password support
Doctor Login
PMDC-based authentication
Laboratory Login
License ID authentication
Session Management
Session Storage based authentication
Lightweight implementation for demonstration and hackathon deployment
🛠️ Technology Stack
Component	Technology
Frontend	HTML5, CSS3, Vanilla JavaScript
Database	Firebase Firestore
File Storage	Firebase Storage
Authentication	Session Storage
PDF Generation	jsPDF, html2canvas
Typography	Google Fonts (Playfair Display, Mulish)
Version Control	Git & GitHub
📂 Project Structure
Shifaa/
│
├── index.html
├── login.html
├── register.html
│
├── patient.html
├── doctor.html
├── lab.html
│
├── seed.html
│
├── css/
├── js/
├── assets/
│
└── README.md
⚙️ Installation & Setup
1. Create Firebase Project
Create a Firebase project.
Enable:
Firestore Database
Firebase Storage
Authentication (Email/Password)
2. Configure Firebase

Replace the existing Firebase configuration in the project with your own configuration values.

3. Seed Demo Data

Open:

seed.html

Click:

Seed Database Now

This creates:

32 Demo Patients
10 Demo Doctors
5 Demo Laboratories

with realistic medical histories and records.

4. Run the Application

Use any local server:

# Python
python -m http.server

# VS Code
Live Server Extension

Open:

index.html

or

login.html
🔑 Demo Credentials
👤 Patient Login
CNIC	Password
42101-1234567-8	patient123
42201-2345678-2	patient123
35201-3456789-3	patient123

Any seeded patient can use:

Password: patient123
👨‍⚕️ Doctor Login
PMDC	Email	Password
12345	ahmed@hospital.pk	any
34567	bilal.h@sch.pk	any
🧪 Laboratory Login
License ID	Email	Password
LAB-9923	any	any
💰 Business Model

Shifaa follows a B2B Healthcare SaaS Model:

Laboratory subscription plans
Healthcare provider licensing
Hospital integrations
Enterprise healthcare partnerships
🎯 Future Roadmap
Completed ✅
Digital prescriptions
PDF prescription generation
Referral management system
Laboratory report upload
Unified patient records
Planned ⏳
QR-based patient identification
WhatsApp prescription reminders
Pharmacy integration portal
Push notifications
Mobile application
AI-assisted health insights
National healthcare interoperability support
👨‍💻 Team – Quantum Tech Visionaries
Name	Roll Number
Saad Imran	SE241078
Sahil Kumar	SE241059
Ubaidullah Rasheed	SE241075
🏆 Hackathon Impact

Shifaa demonstrates how a unified healthcare record system can:

Reduce medical errors
Improve treatment continuity
Accelerate referrals
Enhance emergency response
Digitize healthcare infrastructure
Improve patient outcomes nationwide
📄 License

This project was developed for educational and hackathon purposes.

© Quantum Tech Visionaries. All Rights Reserved.

🙏 Acknowledgements
Firebase
jsPDF
html2canvas
Google Fonts
❤️ Shifaa

Making healthcare portable across Pakistan.
Built by Quantum Tech Visionaries.
