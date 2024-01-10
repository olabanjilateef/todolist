import React from 'react'

const Wrapper = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>BUY & SELL</h1>
        <p>We buy and sell all different types of properties.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Find your new home today</h1>
        <p>Do you need a new home </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Third slide label</h1>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div><br /><br /><br />


{/* img done */}



<form class="row g-3">
    <h1>FILL OUT THIS FORM</h1>
    <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form><br /><br />


{/* FORM DONE */}


<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://media.istockphoto.com/id/1282518866/photo/3d-rendering-of-modern-house-in-luxurious-style.jpg?b=1&s=612x612&w=0&k=20&c=S7HEOfhftZbiXoUgVqASiJgUYHm7LgDvSvpnt3bsDwI=" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Central Park Lofts</h5>
        <p class="card-text">could be a hypothetical or real development that features loft-style living and is likely associated with or inspired by the concept of Central Park. Here's an elaboration on what the name might imply.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">HarborView Residences</h5>
        <p class="card-text"> is a residential development situated near a harbor, offering scenic waterfront views and a coastal living experience. The name implies a community of upscale housing units with a focus on a picturesque location.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Unity Square</h5>
        <p class="card-text"> refers to a location or development emphasizing unity, community, or collaboration. The name suggests a central gathering place or residential area fostering a sense of togetherness.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Solstice Towers</h5>
        <p class="card-text">likely represents a residential or commercial complex with a name inspired by the solstices, indicating a connection to celestial events. The towers may offer a unique and possibly elevated living or working experience.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Wrapper