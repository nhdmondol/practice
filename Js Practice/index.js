<script>
    function calculateAge() {
        const birthdate = new Date(document.getElementById("birthdate").value);
        const today = new Date();
        const ageInMilliseconds = today - birthdate;
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        const age = Math.floor(ageInYears);
        document.getElementById("result").innerHTML = `Your age is approximately ${age} years.`;
    }
</script>