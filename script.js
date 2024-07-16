document.addEventListener("DOMContentLoaded", () => {
  const markAllNotifications = document.querySelector(".mark");
  const notificationDiv = document.querySelectorAll(".notification");
  const notificationNumber = document.querySelector(".notificationNumber");

  function countNotifications() {
    const unread = document.querySelectorAll(".redPoint");
    notificationNumber.textContent = unread.length;
    if (unread.length <= 0) {
      notificationNumber.remove();
      const notificationText = document.querySelector(".text");
      notificationText.textContent = "All notifications are read ";
      markAllNotifications.remove();
    }
  }

  function notificationRead(notification) {
    const redPoint = notification.querySelector(".redPoint"); //div has class redPoint
    if (redPoint) redPoint.remove();
    const post = notification.querySelector(".post");
    if (post) post.style.color = "hsl(219, 14%, 50%)";
    if(notification.classList.contains('chat')) {
      const textChat = document.querySelector(".textChat") 
      textChat.style.backgroundColor = ""
      textChat.style.border = "1px solid hsl(216, 4%, 73%)"
    }
    notification.style.backgroundColor = "";
    countNotifications();
  }

  notificationDiv.forEach((notification) => {
    notification.addEventListener("click", () =>
      notificationRead(notification)
    );
  });

  markAllNotifications.addEventListener("click", () => {
    notificationDiv.forEach((notification) => notificationRead(notification));
  });
  countNotifications();
});
