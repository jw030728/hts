type PhotoType = {
  adress: string;
  description: string;
};

//Photo 컴포넌트 만든거임
const Photo = (text: PhotoType) => {
  const { adress, description } = text;

  return (
    <>
      <section>
        <img src={adress} />
      </section>
      <article>
        <code>{description}</code>
      </article>
    </>
  );
};

export default Photo;
