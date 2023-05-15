// Local Storage에 북마크 정보 저장
export const updateBookmarksInLocalStorage = (data) => {
    const storedData = getBookmarkedDataFromLocalStorage();
    const newData = data.map(item => {
      const storedItem = storedData.find(stored => stored.id === item.id);
      if (storedItem) {
        item.bookmark = storedItem.bookmark;
      }
      return item;
    });
    localStorage.setItem('bookmarkedData', JSON.stringify(newData));
  };
  
  // Local Storage에서 북마크 정보 가져오기
  export const getBookmarkedDataFromLocalStorage = () => {
    const data = localStorage.getItem('bookmarkedData');
    return data ? JSON.parse(data) : [];
  };
  
  // Local Storage에 북마크 추가
  export const updateBookmarkInLocalStorage = (id) => {
    const data = getBookmarkedDataFromLocalStorage();
    const updatedData = data.map(item => {
      if (item.id === id) {
        item.bookmark = true;
      }
      return item;
    });
    localStorage.setItem('bookmarkedData', JSON.stringify(updatedData));
  };
  
  // Local Storage에서 북마크 제거
  export const removeBookmarkFromLocalStorage = (id) => {
    const data = getBookmarkedDataFromLocalStorage();
    const updatedData = data.map(item => {
      if (item.id === id) {
        item.bookmark = false;
        return item;
      }
      return item;
    });
    const filteredData = updatedData.filter(item => item.bookmark === true);
    localStorage.setItem('bookmarkedData', JSON.stringify(filteredData));
  };
  