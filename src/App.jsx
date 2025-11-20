import React from 'react';
import {
  Button,
  Input,
  Card,
  ScheduleCard,
  StatusCard,
  Stepper,
  Table,
  FileUpload
} from './components/index.js';

function App() {
  // Sample data for demonstration
  const steps = [
    { title: 'Data Diri', description: 'Informasi personal' },
    { title: 'Upload Dokumen', description: 'KTP dan ijazah' },
    { title: 'Konfirmasi', description: 'Review data' }
  ];

  const tableColumns = [
    { key: 'name', title: 'Nama Peserta', sortable: true },
    { key: 'scheme', title: 'Skema Sertifikasi' },
    { key: 'status', title: 'Status', render: (status) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        status === 'Lulus' ? 'bg-success text-white' :
        status === 'Pending' ? 'bg-warning text-white' :
        'bg-error text-white'
      }`}>
        {status}
      </span>
    )},
    { key: 'date', title: 'Tanggal' }
  ];

  const tableData = [
    { id: 1, name: 'Ahmad Wijaya', scheme: 'Junior Web Developer', status: 'Lulus', date: '2024-01-15' },
    { id: 2, name: 'Siti Nurhaliza', scheme: 'Senior Web Developer', status: 'Pending', date: '2024-01-20' },
    { id: 3, name: 'Budi Santoso', scheme: 'Junior Web Developer', status: 'Belum Lulus', date: '2024-01-10' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">LSP-Online</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary">Beranda</a>
              <a href="#" className="text-gray-600 hover:text-primary">Tentang</a>
              <a href="#" className="text-gray-600 hover:text-primary">Skema</a>
              <a href="#" className="text-gray-600 hover:text-primary">Jadwal</a>
            </nav>
            <div className="flex space-x-3">
              <Button variant="ghost">Masuk</Button>
              <Button>Daftar</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sistem Informasi Pendaftaran Sertifikasi Kompetensi
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Platform terpercaya untuk pendaftaran dan manajemen sertifikasi kompetensi profesional
          </p>
          <Button size="lg" className="px-8 py-4 text-lg">
            Daftar Sekarang
          </Button>
        </section>

        {/* Status Cards */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Statistik</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatusCard
              title="Total Peserta"
              value="1,234"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              color="primary"
              trend="up"
              change="12% dari bulan lalu"
            />
            <StatusCard
              title="Jadwal Aktif"
              value="15"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              color="warning"
              trend="up"
              change="3 jadwal baru"
            />
            <StatusCard
              title="Sertifikat Terbit"
              value="892"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              color="success"
              trend="up"
              change="8% peningkatan"
            />
          </div>
        </section>

        {/* Stepper Example */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Alur Pendaftaran</h3>
          <div className="bg-white p-6 rounded-lg shadow">
            <Stepper
              steps={steps}
              currentStep={1}
              onStepClick={(step) => console.log('Step clicked:', step)}
            />
          </div>
        </section>

        {/* Form Example */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contoh Formulir</h3>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nama Lengkap"
                placeholder="Masukkan nama lengkap"
                required
                helper="Nama sesuai KTP"
              />
              <Input
                label="Email"
                type="email"
                placeholder="email@example.com"
                required
              />
              <Input
                label="NIK"
                placeholder="Nomor Induk Kependudukan"
                required
                maxLength={16}
              />
              <Input
                label="No. Telepon"
                placeholder="08123456789"
                type="tel"
              />
            </div>
            <div className="mt-6">
              <FileUpload
                label="Upload KTP"
                accept="image/*,.pdf"
                maxSize={2}
                helper="Format: JPG, PNG, PDF. Maksimal 2MB"
                required
              />
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <Button variant="ghost">Batal</Button>
              <Button>Simpan</Button>
            </div>
          </div>
        </section>

        {/* Schedule Cards */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Jadwal Mendatang</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScheduleCard
              title="Junior Web Developer"
              scheme="SKKNI Bidang TIK"
              date="15 Februari 2024"
              time="09:00 - 17:00"
              location="Jakarta"
              status="available"
              price={1500000}
              capacity={20}
              registered={12}
              onRegister={() => console.log('Register clicked')}
            />
            <ScheduleCard
              title="Senior Web Developer"
              scheme="SKKNI Bidang TIK"
              date="20 Februari 2024"
              time="09:00 - 17:00"
              location="Surabaya"
              status="available"
              price={2500000}
              capacity={15}
              registered={15}
              onRegister={() => console.log('Register clicked')}
            />
            <ScheduleCard
              title="Database Administrator"
              scheme="SKKNI Bidang TIK"
              date="25 Februari 2024"
              time="09:00 - 17:00"
              location="Bandung"
              status="full"
              price={2000000}
              capacity={10}
              registered={10}
            />
          </div>
        </section>

        {/* Table Example */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Data Peserta</h3>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table
              columns={tableColumns}
              data={tableData}
              pagination={{
                currentPage: 1,
                totalPages: 5,
                onPageChange: (page) => console.log('Page changed:', page),
                totalRecords: 45,
                pageSize: 10
              }}
              onSort={(key, direction) => console.log('Sort:', key, direction)}
              onRowClick={(row) => console.log('Row clicked:', row)}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">LSP-Online</h4>
              <p className="text-gray-300">Platform terpercaya untuk sertifikasi kompetensi profesional</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Layanan</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Skema Sertifikasi</a></li>
                <li><a href="#" className="hover:text-white">Jadwal Asesmen</a></li>
                <li><a href="#" className="hover:text-white">Pendaftaran</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Informasi</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white">Kontak</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Kontak</h5>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@lsp-online.id</p>
                <p>📞 +62 21 1234 5678</p>
                <p>📍 Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-light mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 LSP-Online. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;