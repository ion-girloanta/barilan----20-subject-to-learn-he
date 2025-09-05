import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const ElementSubjectToLearn = (): JSX.Element => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const scaleX = (window.innerWidth - 32) / 1920;
      const scaleY = (window.innerHeight - 32) / 1418;
      setScale(Math.min(scaleX, scaleY)); // Always scale to fit viewport, no maximum limit
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);
  const navigationItems = [
    {
      text: "יציאה",
      icon: "https://c.animaapp.com/mf6rx1s3m2uA3m/img/icons-2.svg",
    },
    {
      text: "התחלה מחדש",
      icon: "https://c.animaapp.com/mf6rx1s3m2uA3m/img/icons-1.svg",
    },
    {
      text: "שמור לאחר כך",
      icon: "https://c.animaapp.com/mf6rx1s3m2uA3m/img/icons.svg",
    },
    {
      text: "En",
      icon: null,
    },
  ];

  const infoCards = [
    {
      icon: "https://c.animaapp.com/mf6rx1s3m2uA3m/img/card-icons.svg",
      title: "כדאי להכין מראש",
      content: "צילום של תעודת הזהות.",
    },
    {
      icon: "https://c.animaapp.com/mf6rx1s3m2uA3m/img/card-icons-1.svg",
      title: "כדאי לדעת",
      content:
        "במקרה של ביטול רישום – ניתן לקבל החזר מלא של דמי הרישום, אם הביטול נעשה תוך 24 שעות.",
    },
  ];

  const languageOptions = [
    {
      label: "EN",
      flag: "https://c.animaapp.com/mf6rx1s3m2uA3m/img/group.png",
      flagText: "EN",
      bgColor: "bg-[#f2f3f7]",
    },
    {
      label: "עברית",
      flag: "https://c.animaapp.com/mf6rx1s3m2uA3m/img/group-1.png",
      flagText: "עב",
      bgColor: "bg-app-background",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <div
        className="inline-flex flex-col h-[1418px] w-[1920px] items-end relative bg-white origin-center"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center'
        }}
        data-model-id="5584:558165"
      >
      {/* Header with logo */}
      <header className="flex flex-col w-[1920px] items-start gap-2.5 pl-0 pr-6 pt-6 pb-0 relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="flex flex-col items-end gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
          <div className="relative w-[180px] h-[66.94px] bg-[url(https://c.animaapp.com/mf6rx1s3m2uA3m/img/main-logo.png)] bg-cover bg-[50%_50%]" />
        </div>
      </header>

      {/* Navigation bar */}
      <nav className="flex items-center justify-between px-[88px] py-6 relative self-stretch w-full flex-[0_0_auto] bg-white shadow-shadow-medium translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] h-auto p-0 hover:bg-transparent"
            >
              <div className="relative w-fit mt-[-1.00px] font-DSM-button font-[number:var(--DSM-button-font-weight)] text-[#016937] text-[length:var(--DSM-button-font-size)] text-center tracking-[var(--DSM-button-letter-spacing)] leading-[var(--DSM-button-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--DSM-button-font-style)]">
                {item.text}
              </div>
              {item.icon && (
                <img className="relative w-6 h-6" alt="Icons" src={item.icon} />
              )}
            </Button>
          ))}
        </div>

        <img
          className="relative w-8 h-8"
          alt="Arrow right"
          src="https://c.animaapp.com/mf6rx1s3m2uA3m/img/arrow-right.svg"
        />
      </nav>

      {/* Main content */}
      <main className="flex flex-col w-[1131px] h-[938px] items-center justify-center relative">
        <div className="inline-flex h-[897px] items-center gap-12 pt-[88px] pb-0 px-0 flex-col relative">
          {/* Hero section */}
          <section className="flex items-center justify-center gap-2.5 self-stretch w-full flex-[0_0_auto] flex-col relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h1 className="relative self-stretch mt-[-1.00px] font-DSM-h2-bold font-[number:var(--DSM-h2-bold-font-weight)] text-black text-[length:var(--DSM-h2-bold-font-size)] text-center tracking-[var(--DSM-h2-bold-letter-spacing)] leading-[var(--DSM-h2-bold-line-height)] [direction:rtl] [font-style:var(--DSM-h2-bold-font-style)]">
              הדרך שלך לאוניברסיטה מתחילה כאן
            </h1>

            <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-[1099px] mt-[-1.00px] ml-[-72.00px] mr-[-72.00px] [font-family:'Fedra_Sans_Bar-ilan-Light',Helvetica] font-light text-[#00280f] text-4xl leading-[normal] [direction:rtl] text-center tracking-[0]">
                ברוכים הבאים להרשמה!
                <br />
                לפני שמתחילים, הנה כמה דברים שרצינו לספר לך
              </p>
            </div>
          </section>

          {/* Previous registration button */}
          <div className="inline-flex items-center justify-center relative flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <Button
              variant="outline"
              className="inline-flex h-12 items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#016937] hover:bg-gray-50"
            >
              <img
                className="relative w-4 h-4"
                alt="Element icon outline"
                src="https://c.animaapp.com/mf6rx1s3m2uA3m/img/16x16-icon--outline-.svg"
              />

              <span className="relative w-fit mt-[-1.00px] font-fedra-16-medium font-[number:var(--fedra-16-medium-font-weight)] text-[#016937] text-[length:var(--fedra-16-medium-font-size)] text-center tracking-[var(--fedra-16-medium-letter-spacing)] leading-[var(--fedra-16-medium-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--fedra-16-medium-font-style)]">
                נרשמת בעבר? לחץ/י כאן
              </span>
            </Button>
          </div>

          {/* Info cards and language selection */}
          <div className="flex w-[955px] items-end gap-8 flex-[0_0_auto] mb-[-167.84px] flex-col relative">
            {/* Info cards */}
            <div className="inline-flex items-start gap-8 relative flex-[0_0_auto] ml-[-45.00px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              {infoCards.map((card, index) => (
                <Card
                  key={index}
                  className="flex flex-col w-[484px] h-[217px] items-end gap-4 p-8 relative bg-x rounded-2xl overflow-hidden border border-solid border-[#dee2f2] shadow-shadow-large hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-0 w-full">
                    <div className="flex items-start gap-[41px] self-stretch w-full relative flex-[0_0_auto]">
                      <img
                        className="relative w-[74px] h-[74px] mt-[-2.00px] mb-[-2.33px] ml-[-3.00px]"
                        alt="Card icons"
                        src={card.icon}
                      />

                      <h3 className="relative flex-1 h-[69.67px] mt-[-1.00px] [text-shadow:0px_1px_3px_#00000014] font-DSM-button-bold font-[number:var(--DSM-button-bold-font-weight)] text-black text-[length:var(--DSM-button-bold-font-size)] tracking-[var(--DSM-button-bold-letter-spacing)] leading-[var(--DSM-button-bold-line-height)] [direction:rtl] [font-style:var(--DSM-button-bold-font-style)] shadow-shadow-small">
                        {card.title}
                      </h3>
                    </div>

                    <div className="flex flex-col w-[414px] items-end gap-6 relative flex-[0_0_auto]">
                      <p className="self-stretch [text-shadow:0px_1px_3px_#00000014] font-DSM-button-regular font-[number:var(--DSM-button-regular-font-weight)] text-black leading-[var(--DSM-button-regular-line-height)] [direction:rtl] relative mt-[-1.00px] text-[length:var(--DSM-button-regular-font-size)] tracking-[var(--DSM-button-regular-letter-spacing)] [font-style:var(--DSM-button-regular-font-style)] shadow-shadow-small">
                          {card.content}
                        </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Language selection section */}
            <section className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-center gap-20 px-0 py-6 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto] z-[1] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
                  <div className="relative w-[669px] h-[25.84px]">
                    <h2 className="absolute w-[669px] h-[26px] -top-px left-0 [font-family:'Fedra_Sans_Bar-ilan-Book',Helvetica] font-normal text-black text-base leading-[19.2px] [direction:rtl] text-center tracking-[0]">
                      באיזו שפה נוח לך?
                    </h2>
                  </div>

                  <div className="flex flex-wrap w-[669px] items-center justify-center gap-[32px_32px] relative flex-[0_0_auto]">
                    {languageOptions.map((option, index) => (
                      <div
                        key={index}
                        className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]"
                      >
                        <Button
                          variant="ghost"
                          className="inline-flex min-w-[300px] items-center justify-center gap-6 px-8 py-4 relative flex-[0_0_auto] bg-white rounded-3xl shadow-shadow-large hover:shadow-xl transition-shadow duration-300 h-auto"
                        >
                          <span className="relative flex-1 font-DSM-button-regular font-[number:var(--DSM-button-regular-font-weight)] text-[#00280f] text-[length:var(--DSM-button-regular-font-size)] leading-[var(--DSM-button-regular-line-height)] text-center tracking-[var(--DSM-button-regular-letter-spacing)] [font-style:var(--DSM-button-regular-font-style)] [direction:rtl]">
                            {option.label}
                          </span>

                          <div
                            className={`relative w-[88px] h-[88px] ${option.bgColor} rounded-[60px] overflow-hidden`}
                          >
                            <div className="relative h-[65px] top-[23px]">
                              <div className="absolute h-[23px] top-[9px] left-[31px] [font-family:'Fedra_Sans_Bar-ilan-Bold',Helvetica] font-bold text-black text-lg text-right tracking-[0] leading-[normal] [direction:rtl]">
                                {option.flagText}
                              </div>

                              <img
                                className="absolute w-[88px] h-[65px] top-0 left-0"
                                alt="Group"
                                src={option.flag}
                              />
                            </div>
                          </div>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="flex w-[120px] justify-center px-6 py-4 z-0 bg-[#016937] items-center gap-2.5 relative flex-[0_0_auto] hover:bg-[#014a29] transition-colors duration-300 h-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
                  <span className="relative w-fit mt-[-1.00px] font-DSM-button font-[number:var(--DSM-button-font-weight)] text-white text-[length:var(--DSM-button-font-size)] tracking-[var(--DSM-button-letter-spacing)] leading-[var(--DSM-button-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--DSM-button-font-style)]">
                    שנכיר
                  </span>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Background decorative image */}
      <div className="absolute w-[703px] h-[1034px] top-[174px] left-1 bg-[url(https://c.animaapp.com/mf6rx1s3m2uA3m/img/rectangle-16918.png)] bg-cover bg-[50%_50%] animate-fade-in opacity-0 [--animation-delay:600ms]" />
      </div>
    </div>
  );
};
