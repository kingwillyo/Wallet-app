# Wallet App – Authentication (React Native + Expo)

This is the **authentication module** for a modern digital wallet mobile application built with **React Native (Expo)**.  
The current version includes a fully working onboarding → login → signup → OTP verification flow based on the Figma UI design.

>  **Project is in progress** — this repository currently contains only the authentication system.  
More features (dashboard, transactions, cards, and more) will be added later.

---

## Features Completed

### Onboarding Screens
- Swipable intro screens
- Clean illustrations + text
- "Get Started" CTA

### Login Flow
- Email & password fields
- Password hiding toggle
- Validation & error handling
- “Forgot Password?” UI prepared

### Sign Up Flow
- Create new account screen
- Full name, email, password inputs
- Form validation
- Terms & Conditions checkbox

### OTP Verification
- Enter 4–6 digit OTP
- Animated verification UI
- OTP completion screen

### UI/UX Styling
- Exact match to the Figma UI  
- Modern gradients & illustrations
- Smooth navigation and transitions

---

## Tech Stack

**Frontend**
- React Native  
- Expo  
- React Navigation (Stack Navigator)  
- Expo Linear Gradient  
- React Native Reanimated *(if animations are used)*  

**State / Auth**
- Context API / Hooks  
- AsyncStorage *(for temporary session storage)*  
- Mock auth logic *(replaceable with backend)*

---

 Project Structure
/assets
  /fonts
  /images
/src
  /screens
    - Onboarding/
    - Login/
    - Signup/
    - OTP/
  /components
  /navigation
  App.js


 Next Features Planned

Dashboard (balance, transactions)

Cards management

Payments & transfers UI

Notifications screen

Profile updates

Reusable components cleanup

Full backend integration (Supabase / Firebase / Node.js)
