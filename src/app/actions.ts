
"use client";

// Mock server action for contact form
export async function submitContactForm(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  
  console.log("Form submitted:", { name, email, message });
  
  return { success: true };
}
