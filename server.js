const port = process.env.PORT || 3000; // Use the dynamic port from Heroku or fallback to 3000

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
