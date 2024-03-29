// Initialize Supabase client
const supabase = supabase.createClient('https://psndxntojltqaygchgoz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbmR4bnRvamx0cWF5Z2NoZ296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxNDY1MzUsImV4cCI6MjAyMDcyMjUzNX0.wCTghR225_qkpDQTKKaakMNID_ZcskAxgIszJiWB_pQ');

document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for the signup button
    document.getElementById('signupButton').addEventListener('click', async function () {
        // Retrieve the input fields
        var username = document.getElementById('username_s').value;
        var password = document.getElementById('password_s').value;

        // Insert data into the admin table
        const { data, error } = await supabase
            .from('admin')
            .insert([{ username: username, password: password }]);

        if (error) {
            console.error('Error inserting data:', error.message);
            return;
        }

        console.log('Data inserted successfully:', data);

        // Redirect to the login form
        window.location.href = 'login.html';
    });

    // Add event listener for the "Already have an account?" link
    document.getElementById('alreadyHaveAccountLink').addEventListener('click', function () {
        // Redirect to the login form
        window.location.href = 'login.html';
    });
});
