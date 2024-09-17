# Use the official Apache HTTP Server image from the Docker Hub
FROM httpd:2.4

# Copy your static files to the Apache server's document root
COPY . /usr/local/apache2/htdocs/

# Expose port 80 to the outside world
EXPOSE 80

# Start the Apache server
CMD ["httpd-foreground"]
