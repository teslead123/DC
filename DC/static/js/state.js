
const statesData = [
    {"name": "Andaman and Nicobar Islands", "isoCode": "AN", "gstCode": "35", "districts": ["Nicobar", "North and Middle Andaman", "South Andaman"]},
    {"name": "Andhra Pradesh", "isoCode": "AP", "gstCode": "37", "districts": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"]},
    {"name": "Arunachal Pradesh", "isoCode": "AR", "gstCode": "12", "districts": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kamle", "Kra Daadi", "Kurung Kumey", "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang", "Lower Subansiri", "Namsai", "Pakke Kessang", "Papum Pare", "Shi Yomi", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"]},
    {"name": "Assam", "isoCode": "AS", "gstCode": "18", "districts": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"]},
    {"name": "Bihar", "isoCode": "BR", "gstCode": "10", "districts": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"]},
    {"name": "Chandigarh", "isoCode": "CH", "gstCode": "04", "districts": ["Chandigarh"]},
    {"name": "Chhattisgarh", "isoCode": "CG", "gstCode": "22", "districts": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"]},
    {"name": "Dadra and Nagar Haveli and Daman and Diu", "isoCode": "DN", "gstCode": "26", "districts": ["Dadra and Nagar Haveli", "Daman", "Diu"]},
    {"name": "Delhi", "isoCode": "DL", "gstCode": "07", "districts": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"]},
    {"name": "Goa", "isoCode": "GA", "gstCode": "30", "districts": ["North Goa", "South Goa"]},
    {"name": "Gujarat", "isoCode": "GJ", "gstCode": "24", "districts": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "ascended;Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"]},
    {"name": "Haryana", "isoCode": "HR", "gstCode": "06", "districts": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"]},
    {"name": "Himachal Pradesh", "isoCode": "HP", "gstCode": "02", "districts": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"]},
    {"name": "Jammu and Kashmir", "isoCode": "JK", "gstCode": "01", "districts": ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"]},
    {"name": "Jharkhand", "isoCode": "JH", "gstCode": "20", "districts": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"]},
    {"name": "Karnataka", "isoCode": "KA", "gstCode": "29", "districts": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"]},
    {"name": "Kerala", "isoCode": "KL", "gstCode": "32", "districts": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"]},
    {"name": "Ladakh", "isoCode": "LA", "gstCode": "38", "districts": ["Kargil", "Leh"]},
    {"name": "Lakshadweep", "isoCode": "LD", "gstCode": "31", "districts": ["Lakshadweep"]},
    {"name": "Madhya Pradesh", "isoCode": "MP", "gstCode": "23", "districts": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Niwari", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"]},
    {"name": "Maharashtra", "isoCode": "MH", "gstCode": "27", "districts": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"]},
    {"name": "Manipur", "isoCode": "MN", "gstCode": "14", "districts": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"]},
    {"name": "Meghalaya", "isoCode": "ML", "gstCode": "17", "districts": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"]},
    {"name": "Mizoram", "isoCode": "MZ", "gstCode": "15", "districts": ["Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Saitual", "Serchhip"]},
    {"name": "Nagaland", "isoCode": "NL", "gstCode": "13", "districts": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"]},
    {"name": "Odisha", "isoCode": "OR", "gstCode": "21", "districts": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"]},
    {"name": "Puducherry", "isoCode": "PY", "gstCode": "34", "districts": ["Karaikal", "Mahe", "Puducherry", "Yanam"]},
    {"name": "Punjab", "isoCode": "PB", "gstCode": "03", "districts": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "SAS Nagar", "Tarn Taran"]},
    {"name": "Rajasthan", "isoCode": "RJ", "gstCode": "08", "districts": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"]},
    {"name": "Sikkim", "isoCode": "SK", "gstCode": "11", "districts": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"]},
    {"name": "Tamil Nadu", "isoCode": "TN", "gstCode": "33", "districts": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"]},
    {"name": "Telangana", "isoCode": "TG", "gstCode": "36", "districts": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"]},
    {"name": "Tripura", "isoCode": "TR", "gstCode": "16", "districts": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"]},
    {"name": "Uttar Pradesh", "isoCode": "UP", "gstCode": "09", "districts": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"]},
    {"name": "Uttarakhand", "isoCode": "UK", "gstCode": "05", "districts": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"]},
    {"name": "West Bengal", "isoCode": "WB", "gstCode": "19", "districts": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"]}
];

function populateModalStates() {
    const stateSelect = document.getElementById('newSupplierState');
    const citySelect = document.getElementById('newSupplierCity');
    const stateCodeInput = document.getElementById('newSupplierStateCode');

    // Populate states
    stateSelect.innerHTML = '<option value="">Select State</option>';
    statesData.forEach(state => {
        const option = document.createElement('option');
        option.value = state.name;
        option.textContent = state.name;
        option.dataset.gstCode = state.gstCode;
        stateSelect.appendChild(option);
    });

    // Handle state change
    stateSelect.addEventListener('change', function() {
        const stateName = this.value;
        citySelect.innerHTML = '<option value="">Select City/District</option>';
        stateCodeInput.value = '';
        if (stateName) {
            const stateData = statesData.find(s => s.name === stateName);
            if (stateData) {
                stateCodeInput.value = stateData.gstCode;
                stateData.districts.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city;
                    option.textContent = city;
                    citySelect.appendChild(option);
                });
            }
        }
    });
}

// Initialize autocomplete for supplier
function initializeSupplierAutocomplete() {
    console.log('Initializing supplier autocomplete for #buyerName');
    $("#buyerName").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "/autocomplete/supplier/",  // Use absolute URL instead of template tag
                dataType: "json",
                data: { term: request.term },
                success: function(data) {
                    console.log('Supplier autocomplete data:', data);
                    response(data);
                },
                error: function(xhr, status, error) {
                    console.error('Supplier autocomplete error:', status, error);
                    console.error('Response:', xhr.responseText);
                    response([]);
                }
            });
        },
        minLength: 1,
        select: function(event, ui) {
            console.log('Supplier selected:', ui.item.data);
            const supplier = ui.item.data;
            $("#buyerAddress1").val(supplier.address1 || '');
            $("#buyerAddress2").val(supplier.address2 || '');
            $("#buyerState").val(supplier.state || '');
            $("#buyerCity").val(supplier.city || '');
            $("#buyerPincode").val(supplier.pincode || '');
            $("#buyerGstin").val(supplier.gstin || '');
            $("#buyerStateCode").val(supplier.state_code || '');
        },
        open: function() {
            console.log('Supplier autocomplete dropdown opened');
        }
    }).on('focus', function() {
        // Only trigger search if there's existing text
        if ($(this).val().length > 0) {
            $(this).autocomplete('search', $(this).val());
        }
    });
}

// Initialize autocomplete for item names
function initializeItemAutocomplete(selector) {
    console.log('Initializing item autocomplete for:', selector);
    $(selector).each(function() {
        $(this).autocomplete({
            source: function(request, response) {
                $.ajax({
                    url: "/autocomplete/item/",  // Use absolute URL instead of template tag
                    dataType: "json",
                    data: { term: request.term },
                    success: function(data) {
                        console.log('Item autocomplete data:', data);
                        response(data);
                    },
                    error: function(xhr, status, error) {
                        console.error('Item autocomplete error:', status, error);
                        console.error('Response:', xhr.responseText);
                        response([]);
                    }
                });
            },
            minLength: 1,
            select: function(event, ui) {
                console.log('Item selected:', ui.item.data);
                const item = ui.item.data;
                const row = $(this).closest('tr');
                row.find('input[name="item_name[]"]').val(item.item_name || '');
                row.find('input[name="description[]"]').val(item.description || '');
                row.find('select[name="uom[]"]').val(item.uom || '');
                row.find('input[name="quantity[]"]').val(item.quantity || 0);
                row.find('input[name="weight[]"]').val(item.weight || 0);
                row.find('input[name="square_feet[]"]').val(item.square_feet || '');
                row.find('input[name="rate[]"]').val(item.rate || 0);
                row.find('input[name="project_name[]"]').val(item.project_name || '');
                row.find('input[name="project_incharge[]"]').val(item.project_incharge || '');
                row.find('input[name="remarks[]"]').val(item.remarks || '');
            },
            open: function() {
                console.log('Item autocomplete dropdown opened');
            }
        }).on('focus', function() {
            // Only trigger search if there's existing text
            if ($(this).val().length > 0) {
                $(this).autocomplete('search', $(this).val());
            }
        });
    });
}

function saveNewSupplier() {
    const newSupplier = {
        name: $("#newSupplierName").val().trim(),
        address1: $("#newSupplierAddress1").val().trim(),
        address2: $("#newSupplierAddress2").val().trim(),
        state: $("#newSupplierState").val(),
        city: $("#newSupplierCity").val(),
        pincode: $("#newSupplierPincode").val().trim(),
        gstin: $("#newSupplierGstin").val().trim(),
        state_code: $("#newSupplierStateCode").val().trim()
    };

    // Log the data being sent
    console.log('Supplier data to be sent:', newSupplier);

    // Client-side validation
    if (!newSupplier.name || !newSupplier.address1 || !newSupplier.state || !newSupplier.city || !newSupplier.pincode || !newSupplier.state_code) {
        console.log('Validation failed: Missing required fields');
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please fill all required fields."
        });
        return;
    }

    if (!/^\d{6}$/.test(newSupplier.pincode)) {
        console.log('Validation failed: Invalid pincode format');
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Invalid pincode format. Must be 6 digits."
        });
        return;
    }

    if (newSupplier.gstin && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(newSupplier.gstin)) {
        console.log('Validation failed: Invalid GSTIN format');
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Invalid GSTIN format."
        });
        return;
    }

    console.log('Client-side validation passed, sending AJAX request...');

    $.ajax({
        url: "{% url 'add_supplier' %}",
// Make sure this URL is correct
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(newSupplier),
        headers: {
            "X-CSRFToken": $("[name=csrfmiddlewaretoken]").val() || "{{ csrf_token }}"
        },
        beforeSend: function(xhr, settings) {
            console.log('AJAX request details:');
            console.log('URL:', settings.url);
            console.log('Method:', settings.type);
            console.log('Data:', settings.data);
            console.log('Headers:', xhr.getAllResponseHeaders());
        },
        success: function(response) {
            console.log('AJAX success response:', response);
            if (response.status === 'success') {
                // Hide modal and remove backdrop
                $("#addSupplierModal").modal("hide");
                
                // Force remove modal backdrop and restore page
                setTimeout(function() {
                    $(".modal-backdrop").remove();
                    $("body").removeClass("modal-open").css("padding-right", "");
                    $("body").css("overflow", "");
                }, 100);
                
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    html: `${response.message}<br><small>Created by: ${response.created_by}<br>Date: ${response.created_date}</small>`
                });
                
                // Clear modal fields
                $("#addSupplierModal .form-control").val("").removeClass("is-invalid");
                $("#newSupplierCity").html('<option value="">Select City/District</option>');
                // Set new supplier in form
                $("#buyerName").val(newSupplier.name);
                $("#buyerAddressLine1").val(newSupplier.address1);
                $("#buyerAddressLine2").val(newSupplier.address2);
                $("#buyerState").val(newSupplier.state);
                $("#buyerCity").val(newSupplier.city);
                $("#buyerPincode").val(newSupplier.pincode);
                $("#buyerGstinNumber").val(newSupplier.gstin);
                $("#buyerStateCode").val(newSupplier.state_code);
            } else {
                console.log('Server returned error:', response.message);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.message
                });
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX error details:');
            console.error('Status:', status);
            console.error('Error:', error);
            console.error('Response Text:', xhr.responseText);
            console.error('Status Code:', xhr.status);
            
            let errorMessage = "Failed to add supplier. Please try again.";
            
            // Try to parse error response
            try {
                const errorResponse = JSON.parse(xhr.responseText);
                if (errorResponse.message) {
                    errorMessage = errorResponse.message;
                }
            } catch (e) {
                console.error('Could not parse error response:', e);
            }
            
            Swal.fire({
                icon: "error",
                title: "Error",
                text: errorMessage
            });
        }
    });
}

// Add new item row
function addItem() {
    itemCounter++;
    const tbody = document.getElementById("itemsTableBody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${itemCounter}</td>
        <td><input type="text" class="form-control item-name" name="item_name[]" placeholder="Item Name" required></td>
        <td><input type="text" class="form-control" name="description[]" placeholder="Description" required></td>
        <td>
            <select class="form-control" name="uom[]" required>
                <option value="">UOM</option>
                <option value="NOS">NOS</option>
                <option value="KG">KG</option>
                <option value="METER">METER</option>
                <option value="LITER">LITER</option>
                <option value="SET">SET</option>
                <option value="PIECE">PIECE</option>
            </select>
        </td>
        <td><input type="number" class="form-control" name="quantity[]" step="0.01" placeholder="0.00" required></td>
        <td><input type="number" class="form-control" name="weight[]" step="0.01" placeholder="0.00"></td>
        <td><input type="number" class="form-control" name="square_feet[]" step="0.01" placeholder="0.00"></td>
        <td><input type="number" class="form-control" name="rate[]" step="0.01" placeholder="0.00"></td>
        <td><input type="text" class="form-control" name="project_name[]" placeholder="Project"></td>
        <td><input type="text" class="form-control" name="project_incharge[]" placeholder="Incharge name"></td>
        <td><input type="text" class="form-control" name="remarks[]" placeholder="Remarks"></td>
        <td><button type="button" class="btn btn-danger btn-sm remove-item-btn" onclick="removeItem(this)">X</button></td>
    `;
    tbody.appendChild(newRow);
    initializeItemAutocomplete(`#itemsTableBody tr:nth-child(${itemCounter}) .item-name`);
    updateSerialNumbers();
}