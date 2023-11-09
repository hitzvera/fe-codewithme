import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../components/atoms/Text";
import Title from "../components/atoms/Title";
import {
  faChartSimple,
  faCheck,
  faPerson,
  faRupiahSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/atoms/Button";
import { ButtonTypes } from "../styles";
import { useLocation } from "react-router-dom";
import { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

export default function CourseDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const courseName = location.pathname.split("/")[3];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <main className="w-full min-h-[calc(100vh-64px)]">
      <section className="max-w-[1000px] mx-auto mt-4">
        <div className=" bg-slate-100 w-fit px-4 py-2 rounded mb-4 shadow-sm border-2">
          <Text>/ course / {courseName}</Text>
        </div>
      </section>
      <section className="max-w-[1000px] mx-auto bg-slate-100 px-6 py-4 border-2 shadow-md">
        <Title customStyle="text-3xl text-black/60">{courseName}</Title>
        <div className="mt-2">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            optio quia iste quisquam, maiores omnis incidunt quaerat
            consequuntur quis assumenda similique, itaque labore. Explicabo, ex
            maxime suscipit magni molestias laborum dolores voluptate autem
            dicta velit eveniet at, vel, sed unde debitis accusamus? Explicabo,
            voluptatum? Dolorum corporis recusandae neque. Consequatur, quidem.
          </Text>
        </div>
        <div className="flex gap-2 items-center w-fit mt-8">
          <div className="flex items-baseline gap-2">
            <FontAwesomeIcon
              icon={faStar}
              className="text-sm text-yellow-500"
            />
            <Text customStyle="text-sm">5.0</Text>
          </div>
          <div className="flex items-baseline gap-2">
            <FontAwesomeIcon icon={faPerson} className="text-sm" />
            <Text customStyle="text-sm">
              50.000 students has already joined
            </Text>
          </div>
        </div>
        <div className="flex text-sm mt-1">
          <Text>
            Created By{" "}
            <span className="text-blue-500 cursor-pointer">
              Mujahid Ansori Majid
            </span>
          </Text>
        </div>
        <div className="mt-1">
          <div className="flex items-baseline gap-2 text-sm">
            <FontAwesomeIcon icon={faChartSimple} />
            <Text>Beginner Level</Text>
          </div>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto mt-8 bg-slate-100 shadow-md border-2 px-6 py-4">
        <Title customStyle="text-2xl text-black/60 mb-4">Lessons</Title>
        <div className=" grid grid-cols-2 gap-2">
          <Text>
            <FontAwesomeIcon icon={faCheck} className="mr-4" />
            <span>Variables</span>
          </Text>
          <Text>
            <FontAwesomeIcon icon={faCheck} className="mr-4" />
            <span>Data Types</span>
          </Text>
          <Text>
            <FontAwesomeIcon icon={faCheck} className="mr-4" />
            <span>Functions</span>
          </Text>
          <Text>
            <FontAwesomeIcon icon={faCheck} className="mr-4" />
            <span>Async await</span>
          </Text>
          <Text>
            <FontAwesomeIcon icon={faCheck} className="mr-4" />
            <span>Callback functions</span>
          </Text>
          <Text>
            <FontAwesomeIcon icon={faCheck} className="mr-4" />
            <span>Conditions</span>
          </Text>
          <Text>
            <FontAwesomeIcon icon={faCheck} className="mr-4" />
            <span>Iterations</span>
          </Text>
          <Text>
            <FontAwesomeIcon icon={faCheck} className="mr-4" />
            <span>ES6</span>
          </Text>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto">
        <Title customStyle="text-2xl mt-8 text-black/60">What people say</Title>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <figure className="bg-slate-100 flex flex-col p-2 rounded shadow-md border-2">
            <div className="flex">
              <img
                src="/5907.jpg"
                alt="avatar profile"
                className="max-w-[70px]"
              />
              <div className="flex flex-col justify-between py-1 px-4">
                <div>
                  <Text customStyle="font-semibold text-black/60">
                    Name Persons
                  </Text>
                  <Text customStyle="text-sm">Frontend Developer</Text>
                </div>

                <div className="flex items-baseline text-sm gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-orange-500" />
                  <Text>5.0</Text>
                </div>
              </div>
            </div>

            <Text customStyle="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              minima nisi aperiam iure quos tempora facilis nostrum voluptates.
              Earum, temporibus!
            </Text>
          </figure>
          <figure className="bg-slate-100 flex flex-col p-2 rounded shadow-md border-2">
            <div className="flex">
              <img
                src="/5907.jpg"
                alt="avatar profile"
                className="max-w-[70px]"
              />
              <div className="flex flex-col justify-between py-1 px-4">
                <div>
                  <Text customStyle="font-semibold text-black/60">
                    Name Persons
                  </Text>
                  <Text customStyle="text-sm">Frontend Developer</Text>
                </div>

                <div className="flex items-baseline text-sm gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-orange-500" />
                  <Text>5.0</Text>
                </div>
              </div>
            </div>

            <Text customStyle="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              minima nisi aperiam iure quos tempora facilis nostrum voluptates.
              Earum, temporibus!
            </Text>
          </figure>
          <figure className="bg-slate-100 flex flex-col p-2 rounded shadow-md border-2">
            <div className="flex">
              <img
                src="/5907.jpg"
                alt="avatar profile"
                className="max-w-[70px]"
              />
              <div className="flex flex-col justify-between py-1 px-4">
                <div>
                  <Text customStyle="font-semibold text-black/60">
                    Name Persons
                  </Text>
                  <Text customStyle="text-sm">Frontend Developer</Text>
                </div>

                <div className="flex items-baseline text-sm gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-orange-500" />
                  <Text>5.0</Text>
                </div>
              </div>
            </div>

            <Text customStyle="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              minima nisi aperiam iure quos tempora facilis nostrum voluptates.
              Earum, temporibus!
            </Text>
          </figure>
          <figure className="bg-slate-100 flex flex-col p-2 rounded shadow-md border-2">
            <div className="flex">
              <img
                src="/5907.jpg"
                alt="avatar profile"
                className="max-w-[70px]"
              />
              <div className="flex flex-col justify-between py-1 px-4">
                <div>
                  <Text customStyle="font-semibold text-black/60">
                    Name Persons
                  </Text>
                  <Text customStyle="text-sm">Frontend Developer</Text>
                </div>

                <div className="flex items-baseline text-sm gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-orange-500" />
                  <Text>5.0</Text>
                </div>
              </div>
            </div>

            <Text customStyle="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              minima nisi aperiam iure quos tempora facilis nostrum voluptates.
              Earum, temporibus!
            </Text>
          </figure>
        </div>
      </section>

      <section className="my-8 max-w-[1000px] mx-auto flex justify-end">
        <Button typeStyle={ButtonTypes.PRIMARY} onClickHandler={openModal}>
          Purchase now
        </Button>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Purchasing Cuorse {courseName}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 border-t pt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam optio quia iste quisquam, maiores omnis incidunt
                    quaerat consequuntur quis assumenda similique, itaque
                    labore. Explicabo, ex maxime suscipit magni molestias
                    laborum dolores voluptate autem dicta velit eveniet at, vel,
                    sed unde debitis accusamus? Explicabo, voluptatum? Dolorum
                    corporis recusandae neque. Consequatur, quidem.
                  </p>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon
                      icon={faChartSimple}
                      className="text-[12px]"
                    />
                    <Text customStyle="text-[12px]">Beginner Level</Text>
                  </div>
                  <div className="text-[12px] flex items-center gap-1">
                    <FontAwesomeIcon icon={faRupiahSign} />
                    <Text>50.000</Text>
                  </div>
                </div>

                <Dialog.Title
                  as="h4"
                  className="text-lg font-medium leading-6 text-gray-900 mt-4"
                >
                  Pilih metode pembayaran
                  <div className="flex flex-wrap gap-2 my-2 text-sm">
                    <div className="flex justify-center items-center px-4 py-4 cursor-pointer bg-gray-100 rounded text-black/50">
                      Paypal
                    </div>
                    <div className="flex justify-center items-center px-4 py-4 cursor-pointer bg-gray-100 rounded text-black/50">
                      Alfamart
                    </div>
                    <div className="flex justify-center items-center px-4 py-4 cursor-pointer bg-gray-100 rounded text-black/50">
                      BNI mobile
                    </div>
                    <div className="flex justify-center items-center px-4 py-4 cursor-pointer bg-gray-100 rounded text-black/50">
                      BSI syariah
                    </div>
                    <div className="flex justify-center items-center px-4 py-4 cursor-pointer bg-gray-100 rounded text-black/50">
                      BRI
                    </div>
                    <div className="flex justify-center items-center px-4 py-4 cursor-pointer bg-gray-100 rounded text-black/50">
                      Danamon
                    </div>
                  </div>
                </Dialog.Title>

                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <Button typeStyle={ButtonTypes.PRIMARY}>Purchase</Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
}
