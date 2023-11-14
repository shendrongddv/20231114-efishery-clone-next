import Image from "next/image";

const OurMisions = () => {
  return (
    <section className="bg-slate-100 px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <h2 className="text-2xl font-semibold md:text-5xl">
          Aspirasi dan Tujuan Kami
        </h2>

        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-5/12">
            <figure className="h-auto w-full">
              <Image
                src="/misi-global-hifi-1.webp"
                alt="Image"
                width={520}
                height={440}
                className="h-auto w-full"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="flex flex-col gap-4 md:w-6/12">
            <p>
              Di tahun 2050, permintaan global terhadap protein hewan
              diperkirakan akan melonjak hingga 52%. Sayangnya, pada 2030,
              diperkirakan sekitar 660 juta orang masih harus berjuang melawan
              isu kelaparan. Dalam konteks ini, Akuakultur hadir sebagai
              industri yang berkembang pesat, dengan efisiensi tertinggi dalam
              konversi pakan menjadi protein hewani. Akuakultur memiliki potensi
              untuk berperan penting dalam meningkatkan ketahanan pangan.
            </p>

            <p>
              Kami percaya bahwa Akuakultur adalah kunci dalam mengatasi isu
              kelaparan global. Misi kami adalah memberikan akses kepada
              Pembudidaya ke dalam ekonomi digital yang inklusif, menjembatani
              kesenjangan teknologi dan mengatasi ketidaksetaraan. Untuk
              mencapainya, kami memabangun solusi teknologi Akuakultur yang
              terjangkau yang dapat memberdayakan para Pembudidaya dalam
              bisnisnya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMisions;
