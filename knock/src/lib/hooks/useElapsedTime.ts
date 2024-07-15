const useElapsedTime = () => {
  const elapsedTime = (createAt: string) => {
    const savedTime = new Date(createAt);
    const currentTime = new Date();
    const seconds = Math.floor(
      (currentTime.getTime() - savedTime.getTime()) / 1000,
    );

    if (seconds < 60) return '방금 전';

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    return `${savedTime.toLocaleDateString()}`;
  };
  return { elapsedTime };
};

export default useElapsedTime;
